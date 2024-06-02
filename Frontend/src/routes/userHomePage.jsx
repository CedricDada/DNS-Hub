import { Link } from "react-router-dom";
import styles from "../styleSheets/userhomepage.module.css";
import SectionUser from "../components/SectionUser";
import Footer from "../components/Footer";
import NavbarUser from "../components/NavbarUser.jsx";
const UserHomePage = () => {
  return (
    <>
    <NavbarUser />
    <div className={styles["container"]}>
      <SectionUser />
    </div>
    <Footer />
    </>
  );
};

export default UserHomePage;
