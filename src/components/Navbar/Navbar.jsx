"use client";
import React, { useEffect, useState } from "react";
import styles from "./navbar.module.css";
import { Link } from "@/i18n/routing";
import Image from "next/image";

import FbSVG from "../../../public/fb.png";
import InstaSVG from "../../../public/instaLogo.png";
import LinkedinSVG from "../../../public/linkedinLogoo.png";

import { useTranslations } from "next-intl";
import LangSelector from "../language-selector/LangSelector";

import HamburgerSVG from "../../../public/hamburgerSVG.svg";
import NavbarCloseSVG from "../../../public/closeSVG.svg";
import Hamburger from "../dm-bot/Dmbot";

import localFont from "next/font/local";

const minervaModern = localFont({
  src: "../../app/[locale]/fonts/MinervaModern Black.ttf",
  weight: "100",
});

function Navbar() {
  const t = useTranslations("Navbar");

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => document.body.classList.remove("no-scroll");
  }, [isMobileMenuOpen]);

  return (
    <div
      className={`${styles.navbarContainer} ${
        isMobileMenuOpen ? styles.active : ""
      }`}
    >
      <label className={styles.burger}>
        <input type="checkbox" checked={isMobileMenuOpen} onChange={() => {}} />
        <div className={styles.checkmark} onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
        </div>
      </label>

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

      <div
        className={`${styles.hamburgerLinksContainer} ${
          isMobileMenuOpen ? styles.active : styles.close
        }`}
      >
        <Link
          className={styles.link}
          href={"/about"}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          {t("about")}
        </Link>
        <Link
          className={styles.link}
          href={"/services"}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          {t("services")}
        </Link>
        <Link
          className={styles.link}
          href={"/contact"}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          {t("contact")}
        </Link>
      </div>

      <Link
        className={`${styles.logo} `}
        href={"/"}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        DM
      </Link>

      <div className={styles.langSelectorSmall}>
        <LangSelector />
      </div>

      <div className={styles.socialsContainer}>
        <LangSelector />
        <Link
          className={styles.socials}
          href={"https://www.linkedin.com/company/dm-s-ai-automation-agency/"}
        >
          <Image
            className={styles.socialLogo}
            src={LinkedinSVG}
            height={20}
            width={20}
            alt="Facebook Logo"
          />
        </Link>
        <Link
          className={styles.socials}
          href={"https://www.instagram.com/dmsaiautomationagency/"}
        >
          <Image
            className={styles.socialLogo}
            src={InstaSVG}
            height={20}
            width={20}
            alt="Facebook Logo"
          />
        </Link>
        <Link
          className={styles.socials}
          href={"https://www.facebook.com/profile.php?id=61568200016744"}
        >
          <Image
            className={styles.socialLogo}
            src={FbSVG}
            height={20}
            width={20}
            alt="Facebook Logo"
          />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
