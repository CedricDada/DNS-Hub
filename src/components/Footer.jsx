import { social } from "../libs/data";
import styles from "../styleSheets/footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.menu}`}>
        <div className={`${styles.list}`}>
          <span>DNS Request</span>
          <ul>
            <li>
              <Link to="/dns_request">free</Link>
            </li>
            <li>
              <Link to="/dns_request">premium</Link>
            </li>
            <li>
              <Link to="/dns_request"> vip</Link>
            </li>
          </ul>
        </div>
        <div className={`${styles.list}`}>
          <span>Active Domains</span>
          <ul>
            <li>
              <Link to="/userHome">home</Link>
            </li>
            <li>
              <Link to="/dns_request">free</Link>
            </li>
          </ul>
        </div>
        <div className={`${styles.list}`}>
          <span>Get started</span>
          <ul>
            <li>
              <Link to="/userhome">home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
        <div className={styles.footerBottom}>
          <ul className={styles["social-icons"]}>
            {social.map((socialIcon) => {
              const { id, url, icon } = socialIcon;
              return (
                <li key={id}>
                  <Link to={url}>{icon}</Link>
                </li>
              );
            })}
          </ul>
          <p>Copyright &copy; 2024; Designed by Team 13</p>
        </div>
      </div>
      <div></div>
    </footer>
  );
};

export default Footer;
