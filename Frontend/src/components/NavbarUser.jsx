import React, { useState, useRef, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import logo from "../logo.jpg";
import SidebarUser from "./SidebarUser";
import styles from "../styleSheets/navbar.module.css";
import LogoutButton from "./buttons/logoutButton";
import SignupButton from "./buttons/SignupButton";

const NavbarUser = () => {
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
        <SidebarUser display={display} />
        <div className={styles["gap-buttons"]}>
          <LogoutButton />
          <SignupButton />
        </div>
      </div>
    </nav>
  );
};

export default NavbarUser;
