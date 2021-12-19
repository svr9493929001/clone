import { useState } from "react";
import { Reset } from "styled-reset";
import { Header } from "./Header";
import { QuestionsPage } from "./QuestionsPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import { GlobalStyles } from "./GlobalStyles";
import { AskPage } from "./AskPage";
import { userContext } from "./userContext";
import { LoginPage } from "./LoginPage";
function App() {
  const [user, setUser] = useState(null);
  console.log(user);
  return (
    <div>
      <Reset />
      <GlobalStyles />

      <Router>
        <userContext.Provider value={user}>
          <Header />
          <Switch>
            <Route path="/ask">
              <AskPage />
            </Route>
            <Route path="/" exact>
              <QuestionsPage />
            </Route>
            <Router path="/Login" exact>
              <LoginPage />
            </Router>
          </Switch>
        </userContext.Provider>
      </Router>
    </div>
  );
}
export default App;
