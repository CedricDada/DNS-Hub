import { Link } from "react-router-dom";
import styles from "../../styleSheets/navbar.module.css";

const LoginButton = () => {
  return (
      <Link to="/login">
        <button className={`${styles["login-button"]} ${styles["button"]}`}>
          Login
        </button>
      </Link>
  );
};

export default LoginButton;
