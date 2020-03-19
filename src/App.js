import React from "react";
import AppHeader from "./components/AppHeader";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Add from "./pages/Add";
import Vote from "./pages/Vote";
import Result from "./pages/Result";
import styled from "@emotion/styled";
import GlobalStyles from "./GlobalStyles";
import { ThemeProvider } from "emotion-theming";
import peach from "./themes/peach";
import night from "./themes/night";

const Main = styled.main`
  padding: 60px 25px;
  display: flex;
  justify-content: center;
`;

function App() {
  const [theme, setTheme] = React.useState(night);
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyles />
        <AppHeader
          onSwitchColorButtonClick={() => {
            setTheme(theme === night ? peach : night);
          }}
        />
        <Main>
          <Switch>
            <Route exact path="/">
              <Add />
            </Route>
            <Route path="/polls/:pollId/vote">
              <Vote />
            </Route>
            <Route path="/polls/:pollId">
              <Result />
            </Route>
          </Switch>
        </Main>
      </Router>
    </ThemeProvider>
  );
}

export default App;
