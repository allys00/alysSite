import React from "react";
import ToggleTheme from "../toggle-theme/ToggleTheme";
import LanguageSelect from "../language-select/LanguageSelect";
import { ThemeMode } from "../../constants/utils.constants";
import { FiHome, FiMessageSquare, FiInfo } from "react-icons/fi";
import { BsNewspaper } from "react-icons/bs";
import { withTheme } from "styled-components";
import myAvatar from '../../assets/images/myAvatar.svg';

import "./SideBar.scss";

interface IProps {
  onChangeTheme(): void;
  themeMode: ThemeMode;
  theme?: any;
}

const menuItens = [
  {
    icon: FiHome,
  },
  {
    icon: BsNewspaper,
  },
  {
    icon: FiInfo,
  },
  {
    icon: FiMessageSquare,
  },
];

function SideBar({ onChangeTheme, themeMode, theme }: IProps) {
  return (
    <nav className="side-bar">
      <div className="logo">
        <img className="avatar-img" src={myAvatar} alt="avatar" />
      </div>
      <ul className="menu">
        {menuItens.map(({ icon: Icon }, index) => (
          <li key={index}>
            <Icon size={30} color={theme.text} />
          </li>
        ))}
      </ul>
      <div className="footer">
        <ToggleTheme onToggle={onChangeTheme} value={themeMode} />
        <LanguageSelect />
      </div>
    </nav>
  );
}

export default withTheme(React.memo(SideBar));
