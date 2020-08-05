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
          <div className="container">
            <div className="nav">
              <div className="navigation">
                <input
                  type="checkbox"
                  className="navigation__checkbox"
                  id="navi-toggle"
                />
                <label htmlFor="navi-toggle" className="navigation__button">
                  <span className="navigation__icon">&nbsp;</span>
                </label>
                <div className="navigation__background">&nbsp;</div>
                <nav className="navigation__nav">
                  <ul className="navigation__list">
                    <li className="navigation__item">
                      <a href="#" className="navigation__link">
                        Home
                      </a>
                    </li>
                    {!!localStorage.getItem("user") ? (
                      JSON.parse(localStorage.getItem("user"))["role_id"] ==
                      2 ? null : (
                        <li className="navigation__item">
                          <a href="#" className="navigation__link">
                            Users
                          </a>
                        </li>
                      )
                    ) : null}

                    <li className="navigation__item logout">
                      <a
                        href="/api/logoutfull"
                        onClick={this.clearUserData}
                        className="navigation__link"
                      >
                        Logout
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>

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
          </div>
        </React.Fragment>
      </Router>
    );
  }
}
