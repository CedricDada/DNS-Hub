import React, { useState } from "react";
import styles from "../styleSheets/section.module.css";
import { FaGithub } from "react-icons/fa6";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdOutlineSavings } from "react-icons/md";
import { TbClockStar } from "react-icons/tb";
import jobs from "../images/jobs-image.png"
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
      {/*
        <img
          className={styles["sectionImage"]}
          loading="lazy"
          src={jobs}
          alt="Section Image"
              />*/}
    </div>
  );
};

export default Section;
