import React, { ReactElement } from "react";
import { ThemeMode } from "../../constants/utils.constants";
import Switch from "react-switch";
import { FiMoon, FiSun } from "react-icons/fi";

import "./ToggleTheme.scss";

interface IProps {
  onToggle(): void;
  value: ThemeMode;
}

export default ({ onToggle, value }: IProps): ReactElement => {
  return (
    <Switch
      onChange={onToggle}
      checked={value === ThemeMode.LIGHT}
      uncheckedIcon={
        <div className="fix-icons">
          <FiMoon size={20} color="#ffffff" />
        </div>
      }
      checkedIcon={
        <div className="fix-icons">
          <FiSun size={20} color="#ffffff" />
        </div>
      }
    />
  );
};
