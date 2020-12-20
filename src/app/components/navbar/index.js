import React, { useState } from "react";

export default function Navbar() {
  const [burger, setBurger] = useState(0);

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          EE tools
        </a>

        <a
          role="button"
          className={burger ? "navbar-burger is-active" : "navbar-burger"}
          aria-label="menu"
          aria-expanded="false"
          data-target="mainNavbar"
          onClick={() => {
            setBurger(!burger);
          }}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        id="mainNavbar"
        className={burger ? "navbar-menu is-active" : "navbar-menu"}
      >
        <div className="navbar-start">
          <a className="navbar-item">Home</a>
        </div>
      </div>
    </nav>
  );
}
