import React from "react";
import "./SimpleSummary.scss";
import MyPhoto from "../../../components/my-photo/MyPhoto";
import { useTranslation } from "react-i18next";
import text from "../../../constants/text.constants";

export default () => {
  const { t } = useTranslation();

  return (
    <div className="simple-summary-container">
      <h4 className="about-me">{t(text.about_me_title)}</h4>
      <MyPhoto style={{ width: 150 }} />
      <h2 className="my-name">{t(text.my_name)}</h2>
      <h3 className="short-summary">{t(text.short_summary)}</h3>
      <p className="person-summary">{t(text.person_summary)}</p>
    </div>
  );
};
