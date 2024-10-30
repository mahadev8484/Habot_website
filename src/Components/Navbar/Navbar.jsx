import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo1.png";

function Navbar() {
  return (
    <nav className="container">

      <img src={logo} alt="" className="logo" />

      <ul>
        <li>Find Suppliers</li>

        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="/"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Find Service Tags
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li>
              <a class="dropdown-item" href="/">
                Action
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="/">
                Another action
              </a>
            </li>
          </ul>
        </li>

        <li>
          <button>Login / Sign Up</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
