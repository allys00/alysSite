import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalTheme from "./styles/global.style";
import { lightTheme, darkTheme } from "./theme";
import ToggleTheme from "./components/toggle-theme/ToggleTheme";
import { ThemeMode } from "./constants/utils.constants";
import useTheme from "./hooks/useTheme";
import LanguageSelect from "./components/language-select/LanguageSelect";
import text from "./constants/text.constants";
import { useTranslation } from "react-i18next";

function App() {
  const [theme, onChangeTheme] = useTheme();
  const { t } = useTranslation();
  return (
    <ThemeProvider theme={theme === ThemeMode.LIGHT ? lightTheme : darkTheme}>
      <>
        <GlobalTheme />
        <ToggleTheme onToggle={onChangeTheme} value={theme} />
        <LanguageSelect />

        <div>{t(text.welcome)}</div>
      </>
    </ThemeProvider>
  );
}

export default App;
