import React from "react";
import { useTranslation } from "react-i18next";
import text from "./constants/text.constants";

import "./config/i18n.config";

function App() {
  const { t } = useTranslation();
  return <div className="App">{t(text.welcome)}</div>;
}

export default App;
