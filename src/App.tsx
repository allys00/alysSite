import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalTheme from "./styles/global.style";
import { lightTheme, darkTheme } from "./theme";
import useTheme from "./hooks/useTheme";
import SideBar from "./components/side-bar/SideBar";
import { ThemeMode, RoutesENUM } from "./constants/utils.constants";
import Container from "./components/container/Container";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/home/Home";

import "./App.scss";
import Blog from "./pages/blog/Blog";

function App() {
  const [theme, onChangeTheme] = useTheme();
  return (
    <ThemeProvider theme={theme === ThemeMode.LIGHT ? lightTheme : darkTheme}>
      <>
        <GlobalTheme />
        <main className="main-container">
          <SideBar onChangeTheme={onChangeTheme} themeMode={theme} />
          <Container>
            <Switch>
              <Route exact path={RoutesENUM.HOME}>
                <Home />
              </Route>
              <Route exact path={RoutesENUM.BLOG}>
                <Blog />
              </Route>
              <Redirect to={RoutesENUM.HOME} />
            </Switch>
          </Container>
        </main>
      </>
    </ThemeProvider>
  );
}

export default App;
