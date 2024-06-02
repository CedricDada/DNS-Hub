
import React from "react";
import { Link, Form, redirect } from "react-router-dom";
import { signupLinks } from "../libs/data";

import Navbar from "../components/Navbar.jsx";
import styles from "../styleSheets/signup.module.css";
import Footer from "../components/Footer.jsx";


export const action = async ({ request }) => {
  const form = await request.formData();
  console.log(form);
  const formEntries = {};
  for (const [key, value] of form.entries()) {
    formEntries[key] = value;
  }
  const loginData = JSON.stringify(formEntries);
  console.log(loginData);

  try {
    const response = await fetch("http://localhost:5172/login", {
      method: "POST",
      mode: "cors",
      headers: new Headers({

        "Content-Type": "application/json",
        Accept: "application/json",
      }),
      body: loginData,
    });
    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    if(data.error === "Erreur interne du serveur"){
      alert("Erreur interne du serveur");
    }
    if (data.Accept === true) {
      return redirect("/userhome");
    }else{
      alert("Informations incorrectes");
      return '';
    }
  } catch (error) {
    console.log("je suis ici");
    console.error(error);
  }
};

const LoginPage = () => {
  return (
    <>
    <Navbar />
    <div className={styles["login"]}>
      <div className={styles["login-container"]}>
        <div className={styles["login-title"]}>
          <h2>Log in</h2>
        </div>
        <Form className={styles["login-form"]} method="POST">
          <label htmlFor="name">Username:</label>
          <input id="name" type="text" name="name" placeholder="Name" />
          <label htmlFor="password">Password:</label>
          <input id="password" type="password" name="password" placeholder="Password" />
          <button type="submit">Log in</button><br/><br/>
          <h4>You don't have an account? </h4>
          <button><Link to="/signup">Sign up</Link></button>
        </Form>
      </div>
    </div>
    </>
  );
};

export default LoginPage;
