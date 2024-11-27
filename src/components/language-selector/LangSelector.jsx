"use client";

import React, { useEffect, useState } from "react";
import "./lang-selector.style.css";
import { useRouter } from "next/navigation";

export default function LangSelector() {
  const [language, setLanguage] = useState("en"); // Default is English
  const router = useRouter();

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    setLanguage(selectedLanguage);

    router.push(selectedLanguage);
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
        <option value="en">En</option>
        <option value="ka">Ka</option>
        <option value="ru">Ru</option>
      </select>
    </div>
  );
}
