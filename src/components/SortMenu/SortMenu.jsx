import React from "react";
import { NavLink } from "react-router-dom";

const selectedStyle = { color: "#FFFACD", backgroundColor: "#0047AB" };
const Menu = ({ match }) => (
  <nav className="menu">
    <NavLink to="/" style={match.isExact && selectedStyle}>
      date
    </NavLink>
    <NavLink to="/sort/title" activeStyle={selectedStyle}>
      title
    </NavLink>
    <NavLink to="/sort/rating" activeStyle={selectedStyle}>
      rating
    </NavLink>
  </nav>
);
export default Menu;
