import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const campuses = useSelector((state) => state.allCampuses);
  const students = useSelector((state) => state.allStudents);
  console.log(campuses);
  console.log(students);
  return (
    <div className="navbar">
      <button>
        <Link className="link" to="/">
          Home
        </Link>
      </button>
      <button>
        <Link className="link" to="/campuses">
          All Campuses ({campuses && campuses.length})
        </Link>
      </button>
      <button>
        <Link className="link" to="/students">
          All Students ({students && students.length})
        </Link>
      </button>
    </div>
  );
}

export default Navbar;
