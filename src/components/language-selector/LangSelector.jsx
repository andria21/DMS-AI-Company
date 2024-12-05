"use client";

import React, { useEffect, useState } from "react";
import "./lang-selector.style.css";
import { useRouter } from "next/navigation";

export default function LangSelector() {
  const [language, setLanguage] = useState("en");
  const router = useRouter();

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;

    const currentPath = window.location.pathname;

    const segments = currentPath.split("/").filter(Boolean);
    segments[0] = selectedLanguage;
    const newPath = `/${segments.join("/")}`;

    router.push(newPath);

    localStorage.setItem("preferredLanguage", selectedLanguage);
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem("preferredLanguage");
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  return (
    <div className="language-selector">
      <select
        id="language"
        value={language}
        onChange={handleLanguageChange}
        className="language-dropdown"
      >
        <option value="ka">Ka</option>
        <option value="en">En</option>
      </select>
    </div>
  );
}
