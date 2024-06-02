import React, { useState } from "react";
import styles from "../styleSheets/section.module.css";
import { FaGithub } from "react-icons/fa6";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdOutlineSavings } from "react-icons/md";
import { TbClockStar } from "react-icons/tb";
import jobs from "../images/jobs-image.png";
import centralized from "../centralized.png";



const Section = () => {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const handleSelect = (index) => {
    setSelectedIndex(index);
  };

  const handleCloseModal = () => {
    setSelectedIndex(-1);
  };

  return (
    <div className={styles.body}>
      <section className={styles.sectionTabs}>
        <div className={styles.container}>
          <div className={styles.wrapperTabs}>
            <div className={styles.tabs}>
              <div className={styles.tabsMenu} role="tablist">
                <button
                  className={`${styles.tab} ${styles["tab-container"]} ${
                    selectedIndex === 0 ? styles.active : ""
                  }`}
                  onMouseOver={() => handleSelect(0)}
                  onMouseOut={handleCloseModal}
                >
                  <TbClockStar className={styles.imageTabs} />
                  <div className={`${styles.text} max-w-198`}>Time saving</div>
                  {selectedIndex === 0 && (
                    <div className={styles.modalContent}>
                      <h2 className={styles.modalHeader}>
                        Efficient and user friendly
                      </h2>
                    </div>
                  )}
                </button>
                <button
                  className={`${styles.tab} ${
                    selectedIndex === 1 ? styles.active : ""
                  }`}
                  onMouseOver={() => handleSelect(1)}
                  onMouseOut={handleCloseModal}
                >
                  <MdOutlineSavings className={styles.imageTabs} />
                  <div className={`${styles.text} max-w-198`}>Free</div>
                  {selectedIndex === 1 && (
                    <div className={styles.modalContent}>
                      <h2 className={styles.modalHeader}>
                        Our system is totally free
                      </h2>
                    </div>
                  )}
                </button>
                <button
                  className={`${styles.tab} ${
                    selectedIndex === 2 ? styles.active : ""
                  }`}
                  onMouseOver={() => handleSelect(2)}
                  onMouseOut={handleCloseModal}
                >
                  <RiLockPasswordLine className={styles.imageTabs} />
                  <div className={`${styles.text} `}>Securised</div>
                  {selectedIndex === 2 && (
                    <div className={styles.modalContent}>
                      <h2 className={styles.modalHeader}>
                        Protected data and authentification
                      </h2>
                    </div>
                  )}
                </button>
                {/* <button
                  className={`${styles.tab} ${
                    selectedIndex === 3 ? styles.active : ""
                  }`}
                  onMouseOver={() => handleSelect(3)}
                  onMouseOut={handleCloseModal}
                >
                  <FaGithub className={styles.imageTabs} />
                  <div className={`${styles.text} max-w-198`}>GitHub</div>
                  {selectedIndex === 3 && (
                    <div className={styles.modalContent}>
                      <h2 className={styles.modalHeader}>
                        Available on GitHub
                      </h2>
                    </div>
                  )}
                </button> */}
              </div>
              <div
                className={`${styles.highlight} ${
                  selectedIndex !== -1
                    ? styles[`highlight-${selectedIndex}`]
                    : ""
                }`}
              ></div>
            </div>
          </div>
        </div>
      </section>
      <section >
        <div className="wrapper-latest">
          <div className="top-latest">
            <h1>Some features </h1>
          </div>
          <div className={styles.updateBoxes}>
            <div className={styles.updateBox}>
              <img
                src={centralized}
                className={styles.latestImage}
              />
              <h3 className={styles.updateBoxHeader}>
                Centralization and Visibility
              </h3>
              <p className={styles.updateBoxText}>
                Allow grouping and displaying all information related to active domains in a single location, provides a comprehensive and up-to-date overview of the domain portfolio
              </p>
            </div>
            <div className={styles.updateBox}>
              <img
                src="https://www.svgrepo.com/show/390702/files-folder-document-file.svg"
                className={styles.latestImage}
              />
              <h2 className={styles.updateBoxHeader}>
                Simplified Management
              </h2>
              <p className={styles.updateBoxText}>
                Facilitates monitoring and tracking of domain information, centralizes DNS modification requests in a single form, automates certain repetitive tasks related to domain management
              </p>
            </div>
            <div className={styles.updateBox}>
              <img
                loading="lazy"
                src="https://www.svgrepo.com/show/411837/collaborate.svg"
                alt=""
                className={styles.latestImage}
              />
              <h2 className={styles.updateBoxHeader}>
                Oprationnal Efficiency
              </h2>
              <p className={styles.updateBoxText}>
                Reduces the time and effort required to find and update domain information, accelerates the process of submitting and processing DNS requests, enables better coordination and collaboration between involved teams.
              </p>
            </div>
          </div>
        </div>
      </section>
        <img
          className={styles["sectionImage"]}
          loading="lazy"
          src={jobs}
          alt="Section Image"
        />
    </div>
  );
};

export default Section;
