import React from "react";
import { Link } from "react-router-dom";
import UnregisterStudent from "./UnregisterStudent";

function EnrolledStudents(props) {
  const student = props.data;

  return (
    <>
      <li>
        <Link to={`/students/${student.id}`}>
          {student.firstName} {student.lastName}
        </Link>
      </li>

      <UnregisterStudent student={student} />
    </>
  );
}

export default EnrolledStudents;
