import React from "react";
import styles from "./button.module.css";

import { Link } from "@/i18n/routing";

export default function ButtonComponent({ buttonPlaceholder, to }) {
  return (
    <Link className={styles.customButton} href={to}>
      {buttonPlaceholder}
    </Link>
  );
}
