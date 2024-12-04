import React from "react";
import Image from "next/image";
import styles from "./page.module.css";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import ButtonComponent from "@/components/buttonComponent/Button";

function About() {
  const t = useTranslations("About");

  return (
    <div className={styles.aboutContainer}>
      <div className={styles.mainContainer}>
        <div className={styles.leftSection}>
          <div className={styles.infoContainer}>
            <p className={styles.infoHeading}>{t("title")}</p>
            <p className={styles.infoParagraph}>{t("description")}</p>
            <ButtonComponent
              to={"/services"}
              buttonPlaceholder={"Services"}
            ></ButtonComponent>
          </div>
        </div>
        <div className={styles.rightSection}>
          <Image
            className={styles.homeImage}
            src={
              "https://images.unsplash.com/photo-1717347424091-08275b73c918?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width={4000}
            height={3750}
            alt="Image"
          />
        </div>
      </div>
      <div className={styles.AboutSectionContainer}>
        <div >
          <div className={styles.aboutSectionQuote}>
            <h1 className={styles.quote}>
              “Join the movement with DM AI Bots—your ultimate management
              solution!”
            </h1>
            <p className={styles.companyName}>DM's AI Automation Company</p>
          </div>
          <div className={styles.customHr}></div>
          <div className={styles.blogContainer}>
            <Image
              className={styles.blogImage}
              data-stretch="true"
              data-src="https://images.squarespace-cdn.com/content/v1/62e7d6c0f7b4911108ec6c97/1659360968488-O9ZPETNNZFEG71SFMY92/image-asset.jpeg"
              data-image="https://images.squarespace-cdn.com/content/v1/62e7d6c0f7b4911108ec6c97/1659360968488-O9ZPETNNZFEG71SFMY92/image-asset.jpeg"
              data-image-dimensions="2500x2500"
              data-image-focal-point="0.5,0.5"
              alt="Image"
              data-load="false"
              elementtiming="system-image-block"
              src="https://images.squarespace-cdn.com/content/v1/62e7d6c0f7b4911108ec6c97/1659360968488-O9ZPETNNZFEG71SFMY92/image-asset.jpeg"
              width="2500"
              height="2500"
              sizes="100vw"
              loading="lazy"
              decoding="async"
              data-loader="sqs"
            />
            <div className={styles.blogTextContainer}>
              <div className={styles.textOne}>
                <p>{t("textOne")}</p>
                <p>{t("textTwo")}</p>
              </div>
            </div>
          </div>
          <div className={styles.customHr}></div>
          <div className={styles.joinUsContainer}>
            <h1 className={styles.quote}>
              AI bots reshape the future of business.
            </h1>
            <ButtonComponent
              to={"/services"}
              buttonPlaceholder={"Let's Work Together"}
            ></ButtonComponent>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
