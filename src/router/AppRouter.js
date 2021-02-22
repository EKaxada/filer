import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "../components/App";
import Header from "../components/Header";
import FilesList from "../components/FilesList";

const AppRouter = () => {
  return (
    <Router>
      <div className="container">
        <Header />
        <div className="main-content">
          <Switch>
            <Route component={App} path="/" exact={true} />
            <Route component={FilesList} path="/list" />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default AppRouter;
