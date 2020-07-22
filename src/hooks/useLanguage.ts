import { useState, useEffect } from "react";
import { LanguageMode } from "../constants/utils.constants";
import i18next from "i18next";

export default () => {
  const [language, setLanguage] = useState<LanguageMode>(
    i18next.language as LanguageMode
  );

  useEffect(() => {
    const language = sessionStorage.getItem("language");
    if (language) {
      i18next.changeLanguage(language);
      onChangeLanguage(language as LanguageMode);
    }
  }, []);

  function onChangeLanguage(language: LanguageMode): void {
    setLanguage(language);
    i18next.changeLanguage(language);
    sessionStorage.setItem("language", language);
  }

  return [language, onChangeLanguage] as [
    LanguageMode,
    (language: LanguageMode) => {}
  ];
};
