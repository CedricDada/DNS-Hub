import { Link } from "react-router-dom";
import styles from "../styleSheets/about-page.module.css";
import Navbar from "../components/Navbar";

const AboutPage = () => {
  return (
    <>
    <Navbar />
    <div className={styles["about-page"]}>
      <header>
        <div className={styles["container"]}>
          <div id="branding">
            <h1>DNS Hub</h1>
          </div>
        </div>
      </header>

      <div className={styles["container"]}>
        <h3>Bienvenue sur la page À propos de DNS Hub,</h3>
        <p>
          Votre solution de gestion de DNS innovante et fiable conçue pour
          simplifier et sécuriser l'accès à vos applications depuis Internet.
        </p>
        <h3>Qu'est-ce que DNS Hub ?</h3>
        <p>
          DNS Hub est une plateforme de gestion de DNS qui permet aux
          développeurs et aux professionnels de l'informatique de gérer
          facilement les enregistrements DNS de leurs applications de manière
          sécurisée, sans avoir à configurer manuellement les paramètres de leur
          serveur DNS.
        </p>
        <h3>Comment fonctionne DNS Hub ?</h3>
        <p>
          DNS Hub offre une interface intuitive pour créer, modifier et
          supprimer des enregistrements DNS. En quelques clics, vous pouvez
          pointer un domaine ou un sous-domaine vers votre application locale,
          sans avoir à vous soucier de la configuration du serveur DNS. Notre
          système de gestion des zones DNS vous permet de garder le contrôle
          total sur vos enregistrements.
        </p>
        <h3>Pourquoi choisir DNS Hub ?</h3>
        <p>
          <span>Facilité d'utilisation :</span> Avec DNS Hub, il n'est pas
          nécessaire d'avoir des connaissances approfondies en administration
          DNS. Notre interface conviviale et nos instructions claires vous
          permettent de gérer vos enregistrements DNS en quelques minutes.
          <span>Sécurité :</span> La sécurité est notre priorité absolue. DNS
          Hub utilise des protocoles de cryptage avancés pour assurer la
          confidentialité et l'intégrité de vos données DNS.
          <span>Fiabilité :</span> Notre infrastructure robuste garantit que vos
          enregistrements DNS restent stables et accessibles, vous permettant de
          vous concentrer sur votre travail sans vous soucier des interruptions
          de service.
        </p>
        <h3>Que pouvez-vous faire avec DNS Hub ?</h3>
        <p>
          <span>Gestion des enregistrements DNS :</span> Créez, modifiez et
          supprimez facilement tous vos enregistrements DNS (A, CNAME, MX, etc.)
          depuis une seule interface.
          <span>Sous-domaines personnalisés :</span> Configurez des
          sous-domaines personnalisés pour pointer vers vos applications locales
          ou vos serveurs.
          <span>Redirection de trafic :</span> Redirigez le trafic de vos
          domaines vers différentes applications ou serveurs en fonction de vos
          besoins.
          <span>Historique des modifications :</span> Consultez l'historique des
          modifications apportées à vos enregistrements DNS pour une meilleure
          traçabilité.
        </p>
        <div className={styles["end"]}>
          <em>
            Nous sommes passionnés par l'innovation et déterminés à fournir les
            meilleurs outils pour soutenir la communauté des développeurs. DNS
            Hub est plus qu'une plateforme de gestion DNS ; c'est un partenaire
            fiable dans votre parcours de développement.
          </em>
        </div>
      </div>
    </div>
    </>
  );
};

export default AboutPage;