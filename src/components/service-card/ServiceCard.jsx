import React from "react";
import Image from "next/image";
import styles from "./service-card.module.css";

import dm_support from "../../../public/dm_bot_noBG.png";
import dm_medic from "../../../public/dm_medic_noBG.png";
import dm_crm from "../../../public/DM_CRM_noBG_new.png";
import dm_uni from "../../../public/dm_uni_noBG.png";

import { useTranslations } from "next-intl";

function ServiceCard() {
  const t = useTranslations("Services");

  return (
    <div className={styles.serviceBlogContainer}>
      <div className={styles.firstRow}>
        <div className={styles.rowCard}>
          <Image
            className={styles.serviceBlogImage}
            data-stretch="true"
            data-image-dimensions="2500x2500"
            data-image-focal-point="0.5,0.5"
            alt="Image"
            data-load="false"
            elementtiming="system-image-block"
            src={dm_support}
            width="2500"
            height="2500"
            sizes="100vw"
            loading="lazy"
            decoding="async"
            data-loader="sqs"
          />
          <div className={styles.description}>
            <h2 className={styles.cardTitle}>{t("imageTextTwoTitle")}</h2>
            <p className={styles.cardDesc}>
              {t("imageTextTwo")}
              {/* AI is setting the pace for how companies innovate, grow, and adapt
              to an ever-changing world. Businesses embracing AI are leading
              tomorrow's success stories. */}
            </p>
          </div>
        </div>
      </div>
      <div className={styles.secondRow}>
        <div className={styles.rowCard}>
          <div>
            <h2 className={styles.cardTitle}>{t("imageTextOneTitle")}</h2>
            <p className={styles.cardDesc}>
              {t("imageTextOne")}
              {/* The integration of AI technologies enables businesses to scale
              faster, foster creativity, and achieve unparalleled success in
              competitive markets. */}
            </p>
          </div>
          <Image
            className={styles.serviceBlogImage}
            data-stretch="true"
            data-image-dimensions="2500x2500"
            data-image-focal-point="0.5,0.5"
            alt="Image"
            data-load="false"
            elementtiming="system-image-block"
            src={dm_medic}
            width="2500"
            height="2500"
            sizes="100vw"
            loading="lazy"
            decoding="async"
            data-loader="sqs"
          />
        </div>
      </div>
      <div className={styles.secondRow}>
        <div className={styles.rowCard}>
          <Image
            className={styles.serviceBlogImage}
            data-stretch="true"
            data-image-dimensions="2500x2500"
            data-image-focal-point="0.5,0.5"
            alt="Image"
            data-load="false"
            elementtiming="system-image-block"
            src={dm_crm}
            width="2500"
            height="2500"
            sizes="100vw"
            loading="lazy"
            decoding="async"
            data-loader="sqs"
          />
          <div>
            <h2 className={styles.cardTitle}>{t("imageTextThreeTitle")}</h2>
            <p className={styles.cardDesc}>{t("imageTextThree")}</p>
          </div>
        </div>
      </div>
      <div className={styles.firstRow}>
        <div className={styles.rowCard}>
          <div>
            <h2 className={styles.cardTitle}>{t("imageTextFourTitle")}</h2>
            <p className={styles.cardDesc}>{t("imageTextFour")}</p>
          </div>
          <Image
            className={styles.serviceBlogImage}
            data-stretch="true"
            data-image-dimensions="2500x2500"
            data-image-focal-point="0.5,0.5"
            alt="Image"
            data-load="false"
            elementtiming="system-image-block"
            src={dm_uni}
            width="2500"
            height="2500"
            sizes="100vw"
            loading="lazy"
            decoding="async"
            data-loader="sqs"
          />
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;