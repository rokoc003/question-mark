import React from "react";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Add from "./pages/Add";
import Vote from "./pages/Vote";
import Result from "./pages/Result";

function App() {
  return (
    <Router>
      <Header />
      <main className="main">
        <Switch>
          <Route exact path="/">
            <Add />
          </Route>
          <Route path="/Vote">
            <Vote />
          </Route>
          <Route path="/Result">
            <Result />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
