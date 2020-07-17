import { useState, useEffect } from "react";
import { ThemeMode } from "../constants/utils.constants";

export default () => {
  const [theme, setTheme] = useState<ThemeMode>(ThemeMode.LIGHT);

  useEffect(() => {
    const themeFromStorage =
      (sessionStorage.getItem("theme") as ThemeMode) || ThemeMode.LIGHT;
    setTheme(themeFromStorage);
  }, []);

  function onChangeTheme(): void {
    const newTheme = theme === ThemeMode.LIGHT ? ThemeMode.DARK : ThemeMode.LIGHT;
    setTheme(newTheme);
    console.log(theme);
    sessionStorage.setItem("theme", newTheme);
  }

  return [theme, onChangeTheme] as [ThemeMode, () => {}];
};
