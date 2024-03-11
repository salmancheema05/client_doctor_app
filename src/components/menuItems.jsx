import React from "react";
import { Link } from "react-router-dom";
const DefaultMenuItem = ({ children, to, color }) => {
  return (
    <Link to={to} style={{ color: color, textDecoration: "none" }}>
      {children}
    </Link>
  );
};

export default DefaultMenuItem;
