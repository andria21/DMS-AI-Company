import React from "react";
import Image from "next/image";
import styles from "./service-card.module.css";

import dm1 from "../../../public/dm1.jpg";
import dm2 from "../../../public/dm2.jpg";
import dm3 from "../../../public/dm5.jpg";
import dm4 from "../../../public/dm7.jpg";

function ServiceCard() {
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
            src={dm1}
            width="2500"
            height="2500"
            sizes="100vw"
            loading="lazy"
            decoding="async"
            data-loader="sqs"
          />
          <div>
            <h2 className={styles.cardTitle}>Future of business lies in AI</h2>
            <p className={styles.cardDesc}>
              AI is setting the pace for how companies innovate, grow, and adapt
              to an ever-changing world. Businesses embracing AI are leading
              tomorrow's success stories.
            </p>
          </div>
        </div>
        <div className={styles.rowCard}>
          <Image
            className={styles.serviceBlogImage}
            data-stretch="true"
            data-image-dimensions="2500x2500"
            data-image-focal-point="0.5,0.5"
            alt="Image"
            data-load="false"
            elementtiming="system-image-block"
            src={dm2}
            width="2500"
            height="2500"
            sizes="100vw"
            loading="lazy"
            decoding="async"
            data-loader="sqs"
          />
          <div>
            <h2 className={styles.cardTitle}>AI Fuels Growth</h2>
            <p className={styles.cardDesc}>
              The integration of AI technologies enables businesses to scale
              faster, foster creativity, and achieve unparalleled success in
              competitive markets.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.secondRow}>
        <div className={styles.rowCard}>
          <div>
            <h2 className={styles.cardTitle}>Revolutionize With AI</h2>
            <p className={styles.cardDesc}>
              AI isn’t just a tool—it’s the engine driving the reinvention of
              industries. Adopting AI leads to breakthroughs in efficiency and
              customer experience.
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
            src={dm3}
            width="2500"
            height="2500"
            sizes="100vw"
            loading="lazy"
            decoding="async"
            data-loader="sqs"
          />
        </div>
        <div className={styles.rowCard}>
          <div>
            <h2 className={styles.cardTitle}>Success With AI</h2>
            <p className={styles.cardDesc}>
              Early adoption of AI ensures businesses remain competitive, agile,
              and prepared for the challenges and opportunities of the future.
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
            src={dm4}
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
