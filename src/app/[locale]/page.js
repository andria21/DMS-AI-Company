import styles from "./page.module.css";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import ButtonComponent from "@/components/buttonComponent/Button";

import testDM from "../../../public/DM_BG.png";

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
          src={
            "https://images.squarespace-cdn.com/content/v1/62e7d6c0f7b4911108ec6c97/1659360968488-O9ZPETNNZFEG71SFMY92/image-asset.jpeg"
          }
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
