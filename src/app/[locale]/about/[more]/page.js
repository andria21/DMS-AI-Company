import React from "react";
import styles from "./page.module.css";
import { useTranslations } from "next-intl";

function LearnMore() {
  const t = useTranslations("About");
  return (
    <div className={styles.learnMoreContainer}>
      <div className={styles.textContainer}>
        <h1 className={styles.textHeading}>Learn More About DM's AI</h1>
        <p>{t("textTwo")}</p>
      </div>
    </div>
  );
}

export default LearnMore;
