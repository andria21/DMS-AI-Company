import styles from "./page.module.css";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import ButtonComponent from "@/components/buttonComponent/Button";

import homeDM from "../../../public/home_image.png";

export default function Home() {
  const t = useTranslations("HomePage");

  return (
    <div className={styles.homeContainer}>
      <div className={styles.leftSection}>
        <p className={styles.infoHeading}>{t("title")}</p>
        <p className={styles.infoParagraph}>{t("description")}</p>
        <ButtonComponent
          to={"/about"}
          buttonPlaceholder={"Read More"}
        ></ButtonComponent>
      </div>
      <div className={styles.rightSection}>
        <Image
          className={styles.homeImage}
          src={homeDM}
          width={4000}
          height={3750}
          alt="Image"
        />
      </div>
    </div>
  );
}

{
  /* <h1>{t("title")}</h1>
<Link href="/about">{t("about")}</Link> */
}
