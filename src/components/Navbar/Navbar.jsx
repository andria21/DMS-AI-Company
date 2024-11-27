import React from "react";
import styles from "./navbar.module.css";
import { Link } from "@/i18n/routing";
import Image from "next/image";

import FbSVG from "../../../public/fb.png";
import InstaSVG from "../../../public/instaLogo.png";

import { useTranslations } from "next-intl";
import LangSelector from "../language-selector/LangSelector";

function Navbar() {
  const t = useTranslations("Navbar");

  return (
    <div className={styles.navbarContainer}>
      <div className={styles.linksContainer}>
        <Link className={styles.link} href={"/about"}>
        {t("about")}
        </Link>
        <Link className={styles.link} href={"/services"}>
        {t("services")}
        </Link>
        <Link className={styles.link} href={"/contact"}>
        {t("contact")}
        </Link>
      </div>
      <Link className={styles.logo} href={"/"}>DM</Link>
      <div className={styles.socialsContainer}>
        <LangSelector />
        <Link className={styles.socials} href={"/about"}>
          <Image className={styles.socialLogo} src={InstaSVG} height={20} width={20} alt="Facebook Logo" />
        </Link>
        <Link className={styles.socials} href={"/about"}>
          <Image className={styles.socialLogo} src={FbSVG} height={20} width={20} alt="Facebook Logo" />
        </Link>

      </div>
    </div>
  );
}

export default Navbar;
