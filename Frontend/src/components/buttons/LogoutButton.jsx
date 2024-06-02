import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styles from "../../styleSheets/navbar.module.css";

const LogoutButton = () => {
  const { logout } = useAuth0();

  const handleLogout = () => {
    logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    });
  };

  return (
    <button
      onClick={handleLogout}
      className={`${styles["logout-button"]} ${styles["button"]}`}
    >
      Logout
    </button>
  );
};

export default LogoutButton;
