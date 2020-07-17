import React, { ReactElement } from "react";
import { ThemeMode } from "../../constants/utils.constants";
import "./ToggleTheme.scss";

interface IProps {
  onToggle(): void;
  value: ThemeMode;
}

export default ({ onToggle, value }: IProps): ReactElement => {
  return (
    <div className="theme-switch-wrapper">
      <label className="theme-switch" htmlFor="checkbox">
        <input
          type="checkbox"
          id="checkbox"
          onChange={onToggle}
          checked={value === ThemeMode.LIGHT}
        />
        <div className="slider round"></div>
      </label>
    </div>
  );
};
