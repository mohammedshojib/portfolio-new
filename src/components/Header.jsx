import React from "react";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <div class="navbar">
      <div class="flex-1">
        <Link to="/" class="btn btn-ghost normal-case text-xl">
          Shojib
        </Link>
      </div>
      <div class="flex-none">
        <ul class="menu menu-horizontal p-0">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
