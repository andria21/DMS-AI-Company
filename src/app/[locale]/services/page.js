import React from "react";
import Image from "next/image";
import styles from "./page.module.css";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import ButtonComponent from "@/components/buttonComponent/Button";
import ServiceCard from "@/components/service-card/ServiceCard";

function Services(props) {
  const t = useTranslations("Services");

  return (
    <div className={styles.servicesContainer}>
      <div className={styles.mainContainer}>
        <div className={styles.leftSection}>
          <Image
            className={styles.homeImage}
            src={
              "https://images.pexels.com/photos/5614124/pexels-photo-5614124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            width={4000}
            height={3750}
            alt="Image"
          />
        </div>
        <div className={styles.rightSection}>
          <div className={styles.infoContainer}>
            <p className={styles.infoHeading}>{t("title")}</p>
            <p className={styles.infoParagraph}>{t("description")}</p>
            <ButtonComponent
              to={"/contact"}
              buttonPlaceholder={t("contactButton")}
            ></ButtonComponent>
          </div>
        </div>
      </div>
      <div className={styles.servicesSectionContainer}>
      <div className={styles.aboutSectionQuote}>
          <h1 className={styles.quote}>
          {t("quoteOne")}
          </h1>
          <p className={styles.companyName}>{t("companyName")}</p>
          <div className={styles.customHr}></div>
          <ServiceCard />
          <div className={styles.customHr}></div>
          <div className={styles.joinUsContainer}>
            <h1 className={styles.quoteTwo}>
              {t("quoteTwo")}
            </h1>
            <ButtonComponent
              to={"/contact"}
              buttonPlaceholder={t("workTogetherButton")}
            ></ButtonComponent>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
