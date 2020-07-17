import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "../assets/i18n/en";
import pt from "../assets/i18n/pt";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    pt: { translation: pt },
  },
  lng: "pt",
  fallbackLng: "pt",

  interpolation: {
    escapeValue: false,
  },
});
