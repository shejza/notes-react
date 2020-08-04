import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Admin from "./scenes/admin/scenes";
import User from "./scenes/user/scenes";

export default class Index extends Component {
  clearUserData = () => {
    localStorage.removeItem("user");
  };

  render() {
    return (
      <Router>
        <React.Fragment>
          <div class="container">
            <div class="nav">
              <div class="navigation">
                <input
                  type="checkbox"
                  class="navigation__checkbox"
                  id="navi-toggle"
                />
                <label for="navi-toggle" class="navigation__button">
                  <span class="navigation__icon">&nbsp;</span>
                </label>
                <div class="navigation__background">&nbsp;</div>
                <nav class="navigation__nav">
                  <ul class="navigation__list">
                    <li class="navigation__item">
                      <a href="#" class="navigation__link">
                        Home
                      </a>
                    </li>
                    {!!localStorage.getItem("user") ? (
                      JSON.parse(localStorage.getItem("user"))["role_id"] ==
                      2 ? null : (
                        <li class="navigation__item">
                          <a href="#" class="navigation__link">
                            Users
                          </a>
                        </li>
                      )
                    ) : null}

                    <li class="navigation__item logout">
                      <a
                        href="/api/logoutfull"
                        onClick={this.clearUserData}
                        class="navigation__link"
                      >
                        Logout
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>

            <main class="main">
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
          </div>
        </React.Fragment>
      </Router>
    );
  }
}
