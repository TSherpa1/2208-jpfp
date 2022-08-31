import React from "react";
import EnrolledStudents from "./EnrolledStudents";

function Campus(props) {
  const campus = props.campus;
  return (
    <div>
      <h1>{campus.name}</h1>
      <img src={campus.imageUrl} width="600"></img>
      <h3>{campus.address}</h3>
      <p>{campus.description}</p>
      <ul>
        <h4>
          {campus.students && campus.students.length > 0
            ? `Enrolled Students 
          (${campus.students && campus.students.length}):`
            : "There are no students enrolled into this university yet!"}
        </h4>

        {campus.students &&
          campus.students.map((student) => (
            <EnrolledStudents key={student.id} data={student} />
          ))}
      </ul>
    </div>
  );
}

export default Campus;
