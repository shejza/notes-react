import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import User from "./user/scenes";
import Admin from "./admin/scenes";

export default class Dashboard extends Component {
  clearUserData = () => {
    localStorage.removeItem("user");
  };
  render() {
    return (
      <Router>
        <React.Fragment>
          <main className="main">
            {!!localStorage.getItem("user") ? (
              JSON.parse(localStorage.getItem("user"))["role_id"] == 2 ? (
                <User />
              ) : (
                <Admin />
              )
            ) : (
              <User />
            )}
          </main>
        </React.Fragment>
      </Router>
    );
  }
}
