import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App.js";
import { positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

const alertOptions = {
  timeout: 5000,
  position: positions.MIDDLE,
};

class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <AlertProvider template={AlertTemplate} {...alertOptions}>
            <Route path="/" exact component={App}></Route>
          </AlertProvider>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
