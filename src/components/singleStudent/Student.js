import React from "react";
import { Link } from "react-router-dom";
import UpdateStudentForm from "./UpdateStudentForm";

function Student(props) {
  let student = props.student;
  return (
    <div id="single-student">
      <div id="student-info">
        <h3>
          {student.firstName} {student.lastName}
        </h3>
        <img src={student.imageUrl} width="220" height="220" />
        <h4>Email: {student.email}</h4>
        <p>GPA: {student.gpa}</p>
        {student.campus ? (
          <p>
            {student.firstName} {student.lastName} attends{" "}
            <Link to={`/campuses/${student.campus.id}`}>
              {student.campus.name}
            </Link>
          </p>
        ) : (
          <p>
            {student.firstName} {student.lastName} is not currently studying at
            a university!
          </p>
        )}
      </div>
      <UpdateStudentForm student={student} />
    </div>
  );
}

export default Student;
