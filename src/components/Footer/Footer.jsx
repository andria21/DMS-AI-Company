import React from "react";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footerContainer}>
      <p className={styles.followHeading}>Follow @dmsaiautomationagency</p>
      <div className={styles.customHr}></div>
      <div className={styles.termsContainer}>
        <p className={styles.termsText}>Terms & Conditions</p>
        <p className={styles.companyName}>DM's AI Automation Company</p>
      </div>
    </div>
  );
}
