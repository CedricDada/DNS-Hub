import { Link } from "react-router-dom";
import styles from "../../styleSheets/navbar.module.css";

const LogoutButton = () => {
  return (
      <Link to="/">
        <button className={`${styles["login-button"]} ${styles["button"]}`}>
          Logout
        </button>
      </Link>
  );
};

export default LogoutButton;
