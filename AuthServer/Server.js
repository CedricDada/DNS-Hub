import express from 'express';
import path from 'path';
import sqlite3 from 'sqlite3';
import cors from 'cors';
import crypto from 'crypto';

const app = express();
const port = 5172;
const __dirname = path.dirname(new URL(import.meta.url).pathname);

// Créer la base de données SQLite
const db = new sqlite3.Database(path.join(__dirname, 'dnsHub.db'));

// Créer la table "users" si elle n'existe pas
db.run(`
  CREATE TABLE IF NOT EXISTS users (
    username TEXT PRIMARY KEY,
    password TEXT NOT NULL
  )
`);
// Créer la table "activeDomains" si elle n'existe pas
db.run(`
  CREATE TABLE IF NOT EXISTS activeDomains (
    username TEXT NOT NULL,
    domainName TEXT PRIMARY KEY
  )
`);

// Middleware pour gérer les requêtes JSON
app.use(express.json());
app.use(cors());

// Route pour gérer l'inscription  
app.post('/signup', (req, res) => {
  const { name, password, passwordConf } = req.body;

  // Vérifier si l'utilisateur existe déjà
  db.get('SELECT * FROM users WHERE username = ?', [name], (err, user) => {
    if (err) {
      console.error(err);
      return res.status(200).json({ error: 'Erreur interne du serveur' });
    }

    if (user) {
      return res.status(200).json({ error: 'Ce nom est déjà utilisé' });
    }

    // Insérer les informations de l'utilisateur dans la base de données
    db.run(
      'INSERT INTO users (username, password) VALUES (?, ?)',
      [name, crypto.createHash('sha256').update(password).digest('hex')],
      (err) => {
        if (err) {
          console.error(err);
          return res.status(200).json({ error: 'Erreur interne du serveur' });
        }

        return res.status(200).json({ Accept: true });
      }
    );
  });
});
// Route pour gérer la demande de domaine  
app.post('/dns_request', (req, res) => {
  const { name, domain_name } = req.body;

  // Vérifier si l'utilisateur existe déjà
  db.get('SELECT * FROM activeDomains WHERE domainName = ?', [domain_name], (err, user) => {
    if (err) {
      console.error(err);
      return res.status(200).json({ error: 'Erreur interne du serveur' });
    }

    if (user) {
      return res.status(200).json({ error: 'Ce nom de domaine est déjà utilisé' });
    }

    // Insérer les informations de l'utilisateur dans la base de données
    db.run(
      'INSERT INTO activeDomains (username, domainName) VALUES (?, ?)',
      [name, domain_name],
      (err) => {
        if (err) {
          console.error(err);
          return res.status(200).json({ error: 'Erreur interne du serveur' });
        }

        return res.status(200).json({ Accept: true });
      }
    );
  });
});

// Route pour gérer l'inscription  
app.post('/login', (req, res) => {
  const { name, password } = req.body;

  // Vérifier si l'utilisateur existe déjà
  db.get('SELECT * FROM users WHERE username = ? and password = ?', [name, crypto.createHash('sha256').update(password).digest('hex')], (err, user) => {
    if (err) {
      console.error(err);
      return res.status(200).json({ error: 'Erreur interne du serveur' });
    }

    if (user) {
      return res.status(200).json({ Accept: true });
    }else{
      return res.status(200).json({ error: "Informations incorrectes!" });
    }
  });
});

// Route pour récupérer la liste des domaines actifs 
app.post('/active_domains', (req, res) => {
  //récupérer la liste des domaines actifs
  db.all('SELECT * FROM activeDomains;', (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Erreur interne du serveur' });
    }

    if (result) {
      console.log(result);
      return res.status(200).json({ response: result });
    } else {
      return res.status(200).json({ response: [] });
    }
  });
});

app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});