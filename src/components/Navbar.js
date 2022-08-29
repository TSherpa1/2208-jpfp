import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <Link className="link" to="/">
        Home
      </Link>
      <ul>
        <li>
          <Link className="link" to="/campuses">
            All Campuses
          </Link>
        </li>
        <li>
          <Link className="link" to="/students">
            All Students
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
