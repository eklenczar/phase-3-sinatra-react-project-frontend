import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  const linkStyles = {
    display: "inline-block",
    width: "100px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "blue",
    textDecoration: "none",
    color: "white",
  };

  return (
    <div>
      <NavLink
        to="/"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Home
      </NavLink>

      <NavLink
        to="/customers"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Customers
      </NavLink>

      <NavLink
        to="/pies"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Pies
      </NavLink>

      <NavLink
        to="/newpie"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Sell A Pie
      </NavLink>
    </div>
  );
}

export default NavBar;
