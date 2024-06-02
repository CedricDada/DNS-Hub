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
  const signupData = JSON.stringify(formEntries);
  console.log(signupData);

  try {
    const response = await fetch("http://localhost:5172/signup", {
      method: "POST",
      mode: "cors",
      headers: new Headers({

        "Content-Type": "application/json",
        Accept: "application/json",
      }),
      body: signupData,
    });
    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    if(data.error === "Ce nom est déjà utilisé"){
      alert("Ce nom est déjà utilisé");
    } else if(data.error === "Erreur interne du serveur"){
      alert("Erreur interne du serveur")
    }
    if (data.Accept === true) {
      return redirect("/login");
    }else{
      return redirect("/signup");
    }
  } catch (error) {
    console.log("je suis ici");
    console.error(error);
  }
};

const SignUpPage = () => {
  return (
    <>
    <Navbar />
    <div className={styles["login"]}>
      <div className={styles["login-container"]}>
        <div className={styles["login-title"]}>
          <h2>Sign Up</h2>
        </div>
        <Form className={styles["login-form"]} method="POST">
          <label htmlFor="name">Name</label>
          <input id="name" type="text" name="name" placeholder="Name" />
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" placeholder="Password" />
          <label htmlFor="passwordConf">Confirm password</label>
          <input id="passwordConf" type="password" name="passwordConf" placeholder="Password" />
          <button type="submit">Sign up</button><br/><br/>
          Already have an account? 
          <button><Link to="/login">Log in now</Link></button>
        </Form>
        {/*<div className={styles["login-footer"]}>
          {signupLinks.map((option, index) => {
            const { link, text, icon } = option;
            return (
              <button key={index} className={styles.logbtn}>
                <Link to={link} className={styles.link}>
                  {icon} {text}
                </Link>
              </button>
            );
          })}
        </div>*/}
      </div>
    </div>
    </>
  );
};

export default SignUpPage;
