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

const Main = styled.main`
  padding: 60px 25px;
  display: flex;
  justify-content: center;
`;

function App() {
  return (
    <ThemeProvider theme={peach}>
      <Router>
        <GlobalStyles />
        <AppHeader />
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
