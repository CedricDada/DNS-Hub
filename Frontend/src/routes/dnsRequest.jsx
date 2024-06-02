import React from "react";
import { Link, Form, redirect } from "react-router-dom";
import { signupLinks } from "../libs/data";
import NavbarUser from "../components/NavbarUser.jsx";

import styles from "../styleSheets/dnsRequest.module.css";
import Footer from "../components/Footer";


export const action = async ({ request }) => {
  const form = await request.formData();
  console.log(form);
  const formEntries = {};
  for (const [key, value] of form.entries()) {
    formEntries[key] = value;
  }
  const dnsRequestData = JSON.stringify(formEntries);
  console.log(dnsRequestData);

  try {
    const response = await fetch("http://localhost:5172/dns_request", {
      method: "POST",
      mode: "cors",
      headers: new Headers({

        "Content-Type": "application/json",
        Accept: "application/json",
      }),
      body: dnsRequestData,
    });
    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    if(data.error === "Ce nom de domaine est déjà utilisé"){
      alert("Ce nom de domaine est déjà utilisé");
    } else if(data.error === "Erreur interne du serveur"){
      alert("Erreur interne du serveur")
    }
    if (data.Accept === true) {
      alert("Requête traitée avec succès!");
      return redirect("/active_domains");
    }else{
      return '';
    }
  } catch (error) {
    console.error(error);
  }
};

const DnsRequest = () => {
  return (
    <>
    <NavbarUser />
    <div className={styles["login"]}>
      <div className={styles["login-container"]}>
        <div className={styles["login-title"]}>
          <h2>Requête DNS</h2>
        </div>
        <Form className={styles["login-form"]} method="POST">
          <label htmlFor="name">Name</label>
          <input id="name" type="text" name="name" placeholder="Name" />
          <label htmlFor="password">Domain name</label>
          <input id="password" type="text" name="domain_name" placeholder="domain name" />
          <button type="submit">Send</button><br/><br/>
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

export default DnsRequest;

