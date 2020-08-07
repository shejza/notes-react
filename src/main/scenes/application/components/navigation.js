import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  const clearUserData = () => {
    localStorage.removeItem("user");
  };
  return (
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
              <Link
                to={{
                  pathname: "/app",
                }}
                className="navigation__link"
              >
                Home
              </Link>
            </li>
            {!!localStorage.getItem("user") ? (
              JSON.parse(localStorage.getItem("user"))["role_id"] ==
              2 ? null : (
                <li className="navigation__item">
                  <Link
                    to={{
                      pathname: "/app/users",
                    }}
                    className="navigation__link"
                  >
                    Users
                  </Link>
                </li>
              )
            ) : null}

            <li className="navigation__item logout">
              <a
                href="/api/logoutfull"
                onClick={clearUserData}
                className="navigation__link"
              >
                Logout
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
