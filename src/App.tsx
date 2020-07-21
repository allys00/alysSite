import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalTheme from "./styles/global.style";
import { lightTheme, darkTheme } from "./theme";
import useTheme from "./hooks/useTheme";
import SideBar from "./components/side-bar/SideBar";
import { ThemeMode } from "./constants/utils.constants";
import Container from "./components/container/Container";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.scss";
import Home from "./pages/home/Home";

function App() {
  const [theme, onChangeTheme] = useTheme();
  return (
    <ThemeProvider theme={theme === ThemeMode.LIGHT ? lightTheme : darkTheme}>
      <>
        <GlobalTheme />
        <main className="main-container">
          <SideBar onChangeTheme={onChangeTheme} themeMode={theme} />
          <Container>
            <Router>
              <Switch>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
            </Router>
          </Container>
        </main>
      </>
    </ThemeProvider>
  );
}

export default App;
