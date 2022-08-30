import React from "react";
import { Link } from "react-router-dom";

function Student(props) {
  const student = props.data;
  return (
    <li>
      <h3>
        <Link to={`/students/${student.id}`}>
          {student.firstName} {student.lastName}
        </Link>
      </h3>
      <img src={student.imageUrl} width="220" height="220" />
    </li>
  );
}

export default Student;
