import styles from "../../styleSheets/navbar.module.css";
import { Link } from "react-router-dom";

const SignUpButton = () => {
  return (
      <Link to="/signup">
        <button className={`${styles["signup-button"]} ${styles["button"]}`}>
          Sign up
        </button>
      </Link>
  );
};

export default SignUpButton;
