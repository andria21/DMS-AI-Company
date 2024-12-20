import React from "react";
import Image from "next/image";
import styles from "./page.module.css";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import ButtonComponent from "@/components/buttonComponent/Button";

import homeDM from "../../../../public/home_image.png";

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
              buttonPlaceholder={t("serviceButton")}
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
        <div>
          <div className={styles.aboutSectionQuote}>
            <h1 className={styles.quote}>{t("quoteOne")}</h1>
            <p className={styles.companyName}>{t("title")}</p>
          </div>
          <div className={styles.customHr}></div>
          <div className={styles.blogContainer}>
            <Image
              className={styles.blogImage}
              data-stretch="true"
              data-image-dimensions="2500x2500"
              data-image-focal-point="0.5,0.5"
              alt="Image"
              data-load="false"
              elementtiming="system-image-block"
              src={homeDM}
              width="2500"
              height="2500"
              sizes="100vw"
              loading="lazy"
              decoding="async"
              data-loader="sqs"
            />
            <div className={styles.blogTextContainer}>
              <div className={styles.textOne}>
                <h3 className={styles.textOneDescription}>{t("textOne")}</h3>
                <ButtonComponent
                  to={"/about/learn-more"}
                  buttonPlaceholder={t("learnMoreButton")}
                ></ButtonComponent>
                {/* <p>{t("textTwo")}</p> */}
              </div>
            </div>
          </div>
          <div className={styles.customHr}></div>
          <div className={styles.joinUsContainer}>
            <h1 className={styles.quote}>{t("quoteTwo")}</h1>
            <ButtonComponent
              to={"/services"}
              buttonPlaceholder={t("workTogetherButton")}
            ></ButtonComponent>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
