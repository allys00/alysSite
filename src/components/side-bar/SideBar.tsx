import React from "react";
import ToggleTheme from "../toggle-theme/ToggleTheme";
import LanguageSelect from "../language-select/LanguageSelect";
import { ThemeMode, RoutesENUM } from "../../constants/utils.constants";
import { FiHome, FiMessageSquare, FiInfo } from "react-icons/fi";
import { RiArticleLine } from "react-icons/ri";
import { withTheme } from "styled-components";
import MyPhoto from "../my-photo/MyPhoto";
import { Link } from "react-router-dom";

import "./SideBar.scss";

interface IProps {
  onChangeTheme(): void;
  themeMode: ThemeMode;
  theme?: any;
}

const menuItens = [
  {
    icon: FiHome,
    router: RoutesENUM.HOME,
  },
  {
    icon: RiArticleLine,
    router: RoutesENUM.BLOG,
  },
  {
    icon: FiInfo,
    router: RoutesENUM.ABOUT_ME,
  },
  {
    icon: FiMessageSquare,
    router: RoutesENUM.CONTACT,
  },
];

function SideBar({ onChangeTheme, themeMode, theme }: IProps) {
  const currentRoute = RoutesENUM.HOME;
  return (
    <nav className="side-bar">
      <div className="logo">
        <MyPhoto style={{ width: "80px" }} />
      </div>
      <ul className="menu">
        {menuItens.map(({ icon: Icon, router }, index) => (
          <li key={index} className={currentRoute === router ? "active" : ""}>
            <Link to={router}>
              <Icon size={25} color={theme.main} />
            </Link>
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
