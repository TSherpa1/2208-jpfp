import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Campus from "./Campus";

function Campuses() {
  const campuses = useSelector((state) => state.allCampuses);
  return (
    <div>
      <ul>
        <h1>Campuses</h1>
        {campuses &&
          campuses.map((campus) => <Campus key={campus.id} data={campus} />)}
      </ul>
      <Link to="/">Go To Home Page</Link>
    </div>
  );
}

export default Campuses;
