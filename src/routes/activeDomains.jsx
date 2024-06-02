import { Link, useLoaderData } from "react-router-dom";
import styles from "../styleSheets/activedomains.module.css";
import NavbarUser from "../components/NavbarUser";
import Footer from "../components/Footer";

export const loader = async () => {
    try {
      const response = await fetch("http://localhost:5172/active_domains", {
        method: "POST",
        mode: "cors",
        headers: new Headers({
  
          "Content-Type": "application/json",
          Accept: "application/json",
        }),
        body: null,
      });
      if (!response.ok) {
        alert("Erreur lors de la récupération");
      }
      const data = await response.json();
      if(data.error === "Aucun domaine actif"){
        alert("Aucun domaine actif");
      } else if(data.error === "Erreur interne du serveur"){
        alert("Erreur interne du serveur")
      }
      if (data.response) {
        return data.response;
      }
    } catch (error) {
      console.error(error);
    }
    return [];
}

const ActiveDomains = () => {
  //activeDomainsData = [{username: "Darel", domainName: "www.darel.com"}, {username: "Dsdfsarel", domainName: "www.daresdfsl.com"}, {username: "Daredsl", domainName: "www.daredl.com"},]

  let activeDomainsData = useLoaderData();
  console.log(activeDomainsData);

  return (
    <>
    <NavbarUser />
    <div className={styles["about-page"]}>
      <header>
        <div className={styles["container"]}>
          <div id="branding">
            <h1>Liste des domaines actifs</h1>
          </div>
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.th}>Username</th>
                <th className={styles.th}>Domain name</th>
              </tr>
            </thead>
            <tbody>
              {activeDomainsData.map((domain, index) => (
                <tr key={index} className={styles.tr}>
                  <td className={styles.td}>{domain.username}</td>
                  <td className={styles.td}>{domain.domainName}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
        <table>
        </table>
        </div>

      </header>
    </div>
    <Footer />
    </>
  );
};

export default ActiveDomains;
