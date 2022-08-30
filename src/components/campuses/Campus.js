import React from "react";
import { Link } from "react-router-dom";

function Campus(props) {
  let campus = props.data;
  return (
    <div>
      <li>
        <Link to={`/campuses/${campus.id}`}>
          <h2>{campus.name}</h2>
        </Link>
        <h3>
          {campus.students.length} Student
          {campus.students.length === 1 ? "" : "s"} Enrolled
        </h3>
        <img src={campus.imageUrl} width="600"></img>
      </li>
    </div>
  );
}

export default Campus;
