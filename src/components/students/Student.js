import React from "react";

function Student(props) {
  const student = props.data;
  return (
    <li>
      <h3>
        {student.firstName} {student.lastName} - Attends {student.campus.name}
      </h3>
      <img src={student.imageUrl} width="220" height="220" />
      <h4>Email: {student.email}</h4>
      <p>GPA: {student.gpa}</p>
    </li>
  );
}

export default Student;
