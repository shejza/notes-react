import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Users from "./scenes/admin/scenes/users";
import ProtectedRoute from "../../components/ProtectedRoutes";
import Navigation from "./components/navigation";
import Dashboard from "./scenes";

export default class Index extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <div className="container">
            <Navigation />

            <Switch>
              <ProtectedRoute exact path="(|/app/*)" component={Dashboard} />
              <Route path="/app/users" component={Users} />
            </Switch>
          </div>
        </React.Fragment>
      </Router>
    );
  }
}
