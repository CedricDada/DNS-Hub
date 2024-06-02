import React, { useState, useRef, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import logo from "../logo.jpg";
import Sidebar from "../components/Sidebar";
import styles from "../styleSheets/navbar.module.css";
import LoginButton from "./buttons/loginButton";
import SignupButton from "./buttons/SignupButton";

const Navbar = () => {
  const [display, setDisplay] = useState(false);

  return (
    <nav className>
      <div className={styles["nav-center"]}>
        <div className={styles["nav-header"]}>
          <img src={logo} alt="logo" className={styles["image"]} />
          <button className={styles["nav-toggle"]}>
            <FaBars onClick={() => setDisplay(!display)} />
          </button>
        </div>
        <Sidebar display={display} />
        <div className={styles["gap-buttons"]}>
          <LoginButton />
          <SignupButton />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
