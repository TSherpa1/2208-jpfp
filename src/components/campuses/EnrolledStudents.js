import React from "react";

function EnrolledStudents(props) {
  const student = props.data;
  return (
    <li>
      <p>
        {student.firstName} {student.lastName}
      </p>
    </li>
  );
}

export default EnrolledStudents;
