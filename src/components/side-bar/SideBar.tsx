import React from "react";
import ToggleTheme from "../toggle-theme/ToggleTheme";
import LanguageSelect from "../language-select/LanguageSelect";
import { ThemeMode } from "../../constants/utils.constants";
import { FiHome, FiMessageSquare, FiInfo } from "react-icons/fi";
import { BsNewspaper } from "react-icons/bs";
import { withTheme } from "styled-components";
import myAvatar from "../../assets/images/myAvatar.svg";

import "./SideBar.scss";

interface IProps {
  onChangeTheme(): void;
  themeMode: ThemeMode;
  theme?: any;
}

const menuItens = [
  {
    icon: FiHome,
    router: "home",
  },
  {
    icon: BsNewspaper,
    router: "blog",
  },
  {
    icon: FiInfo,
    router: "about-me",
  },
  {
    icon: FiMessageSquare,
    router: "contact",
  },
];

function SideBar({ onChangeTheme, themeMode, theme }: IProps) {
  const currentRoute = "home";
  return (
    <nav className="side-bar">
      <div className="logo">
        <img className="avatar-img" src={myAvatar} alt="avatar" />
      </div>
      <ul className="menu">
        {menuItens.map(({ icon: Icon, router }, index) => (
          <li key={index} className={currentRoute === router ? "active" : ""}>
            <Icon size={30} color={theme.main} />
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
