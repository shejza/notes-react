import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class Index extends Component {
  clearUserData = () => {
    localStorage.removeItem("user");
  };

  render() {
    return (
      <Router>
        <React.Fragment>
          <div>
            <a href="/api/logoutfull" onClick={this.clearUserData}>
              <i className="fa fa-power-off"></i> <span>Logout</span>
            </a>
          </div>

          {!!localStorage.getItem("user")
            ? JSON.parse(localStorage.getItem("user"))["role_id"] == 2
              ? "Useri"
              : "Admini"
            : "Useri"}
        </React.Fragment>
      </Router>
    );
  }
}
