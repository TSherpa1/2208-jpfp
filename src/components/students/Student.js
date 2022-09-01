import React from "react";
import { Link } from "react-router-dom";
import DeleteStudent from "./DeleteStudent";

function Student(props) {
  const student = props.data;
  return (
    <>
      <li>
        <h3>
          <Link to={`/students/${student.id}`}>
            {student.firstName} {student.lastName}
          </Link>
        </h3>
        <img src={student.imageUrl} width="220" height="220" />
      </li>
      <h4>Remove Student: </h4>
      <DeleteStudent studentId={student.id} />
    </>
  );
}

export default Student;
