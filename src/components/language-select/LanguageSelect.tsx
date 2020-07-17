import React from "react";
import BrazilFlagIcon from "../Icons/BrazilFlagIcon";
import USAFlagIcon from "../Icons/USAFlagIcon";
import useLanguage from "../../hooks/useLanguage";
import { LanguageMode } from "../../constants/utils.constants";

import './LanguageSelect.scss'
export default React.memo(() => {
  const [language, onChangeLanguage] = useLanguage();

  const changeLanguage = (value: LanguageMode) => {
    onChangeLanguage(value);
  };

  return (
    <div className="languages-icons">
      <BrazilFlagIcon
        onClick={() => changeLanguage(LanguageMode.PT)}
        width={30}
        height={25}
        style={{ opacity: language === LanguageMode.PT ? 1 : 0.5 }}
      />
      <USAFlagIcon
        onClick={() => changeLanguage(LanguageMode.EN)}
        width={30}
        height={25}
        style={{ opacity: language === LanguageMode.EN ? 1 : 0.5 }}
      />
    </div>
  );
});
