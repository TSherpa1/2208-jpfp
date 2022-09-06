import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Student from "./Student";
import AddStudentForm from "./AddStudentForm";

function Students() {
  const students = useSelector((state) => state.allStudents);

  return (
    <div id="all-students">
      <div id="students-list">
        <h1>Students</h1>
        <ul>
          {students &&
            students.map((student) => (
              <Student key={student.id} data={student} />
            ))}
        </ul>
        <Link className="home-link" to="/">
          Go To Home Page
        </Link>
      </div>
      <AddStudentForm />
    </div>
  );
}

export default Students;
