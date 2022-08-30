import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Student from "./Student";

function Students() {
  const students = useSelector((state) => state.allStudents);

  return (
    <div>
      <h1>Students:</h1>
      <ul>
        {students &&
          students.map((student) => (
            <Student key={student.id} data={student} />
          ))}
      </ul>
      <Link to="/">Go To Home Page</Link>
    </div>
  );
}

export default Students;
