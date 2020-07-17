import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalTheme from "./styles/global.style";
import { lightTheme, darkTheme } from "./theme";
import ToggleTheme from "./components/toggle-theme/ToggleTheme";
import { ThemeMode } from "./constants/utils.constants";
import useTheme from "./hooks/useTheme";

function App() {
  const [theme, onChangeTheme] = useTheme();

  return (
    <ThemeProvider theme={theme === ThemeMode.LIGHT ? lightTheme : darkTheme}>
      <>
        <GlobalTheme />
        <ToggleTheme onToggle={onChangeTheme} value={theme} />
      </>
    </ThemeProvider>
  );
}

export default App;
