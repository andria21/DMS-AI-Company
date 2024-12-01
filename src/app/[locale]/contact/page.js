"use client";

import React, { useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";

import FbSVG from "../../../../public/fb.png";
import InstaSVG from "../../../../public/instaLogo.png";

import { Link } from "@/i18n/routing";
import ButtonComponent from "@/components/buttonComponent/Button";

function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const handleMessageSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const name = e.target[0].value;
    const lastName = e.target[1].value;
    const email = e.target[2].value;
    const subject = e.target[3].value;
    const message = e.target[4].value;

    try {
      await fetch("/api/emails", {
        method: "POST",
        body: JSON.stringify({
          name,
          lastName,
          email,
          subject,
          message,
        }),
      });
      e.target.reset();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.contactContainer}>
      <dir className={styles.contactInfoContainer}>
        <h1 className={styles.contactInfoHeading}>Contact Us</h1>
        <p className={styles.contactInfoP}>
          Lorem ipsum dolor sit amet, consec lorem ipsum dolor sit amet,
          consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt
          ut laoreet dolore.
        </p>
        <div className={styles.customHr}></div>
        <div className={styles.mailInfo}>
          <p>email: dmaiautomation@gmail.com</p>
          <p>phone: +(995)555-55-55-55</p>
        </div>
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
      </dir>
      <form className={styles.formContainer} onSubmit={handleMessageSubmit}>
        <div className={styles.row}>
          <div className={styles.column}>
            <label className={styles.label}>
              First Name
              <span className={styles.requiredSpan}> (required)</span>
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className={styles.input}
              required
            />
          </div>
          <div className={styles.column}>
            <label className={styles.label}>
              Last Name <span className={styles.requiredSpan}> (required)</span>
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className={styles.input}
              required
            />
          </div>
        </div>
        <div className={styles.group}>
          <label className={styles.label}>
            Email <span className={styles.requiredSpan}> (required)</span>
          </label>
          <input
            type="text"
            id="email"
            name="email"
            className={styles.input}
            required
          />
        </div>
        <div className={styles.group}>
          <label className={styles.label}>
            Subject <span className={styles.requiredSpan}> (required)</span>
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            className={styles.input}
            required
          />
        </div>
        <div className={styles.group}>
          <label className={styles.label}>
            Message <span className={styles.requiredSpan}> (required)</span>
          </label>
          <textarea
            id="message"
            name="message"
            className={styles.textarea}
            required
          />
        </div>

        <button className={styles.submitButton}>Submit</button>
      </form>
      {/* {isLoading && <p>Loading...</p>} */}
    </div>
  );
}

export default Contact;
