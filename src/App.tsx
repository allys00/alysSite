import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalTheme from "./styles/global.style";
import { lightTheme, darkTheme } from "./theme";
import useTheme from "./hooks/useTheme";
import SideBar from "./components/side-bar/SideBar";
import { ThemeMode } from "./constants/utils.constants";

function App() {
  const [theme, onChangeTheme] = useTheme();
  return (
    <ThemeProvider theme={theme === ThemeMode.LIGHT ? lightTheme : darkTheme}>
      <>
        <GlobalTheme />
        <SideBar onChangeTheme={onChangeTheme} themeMode={theme} />
      </>
    </ThemeProvider>
  );
}

export default App;
