import styles from "../styleSheets/body.module.css";
import { Link } from "react-router-dom";
import dns from "../dns.png"

const Body = () => {
  return (
    <div className={`${styles["body"]} `}>
      <div className={styles["container"]}>
        <div className={styles["welcomeContainer"]}>
          <div className={styles["welcomeText"]}>
            <h1 className={styles["heading-h1"]}>Welcome to DNS Hub</h1>
            <h2 className={styles["heading-h2"]}>
              A platform that allow users to manage DNS requests and active domains.
            </h2>
            <div className={styles["buttons"]}>
              <Link className={styles["about-page"]} to="/signup">
                <button className={styles["login-button"]}>Get Started</button>
              </Link>
              <Link className={styles["about-page"]} to="/about">
                <button className={styles["login-button"]}>About</button>
              </Link>
            </div>
          </div>
          <img
            src={dns}
            className={`img-unified ${styles.image}`}
            alt="Network Icon"
          />
        </div>
      </div>
    </div>
  );
};

export default Body;
