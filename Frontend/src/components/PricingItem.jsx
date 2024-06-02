import React, { useRef, useEffect } from "react";
import { navLinks } from "../libs/data";
import styles from "../styleSheets/activedomains.module.css";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import logo from "../images/voiture.jpeg";
import orange from "../images/orange.jpg";
import momo from "../images/momo.jpg";
import { useAuth0 } from "@auth0/auth0-react";

const PricingItem = ({ type, text, content_button,link }) => {
  const { loginWithRedirect } = useAuth0();
  const handleSuscribe = async() => {
    await loginWithRedirect({
      appState: {
        returnTo: link,
      },
    });
  };
  return (
    <div className={styles["pricing-item"]}>
      <h3 className={styles["pricing-item-title"]}>{type}</h3>
      <p className={styles["pricing-item-text"]}>{text}</p>
      <div className={styles["pricing-button-container"]}>
        <button className={styles["pricing-button"]} onClick={handleSuscribe}>
          {content_button}
        </button>
        {type == "FREE" || (
          <div className={styles["payment-buttons-container"]}>
            <img src={orange} className={styles["payment-buttons"]} />
            <img src={momo} className={styles["payment-buttons"]} />
          </div>
        )}
      </div>
    </div>
  );
};

export default PricingItem;
