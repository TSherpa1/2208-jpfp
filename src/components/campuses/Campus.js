import React from "react";
import EnrolledStudents from "./EnrolledStudents";

function Campus(props) {
  let campus = props.data;
  return (
    <div>
      <li>
        <h2>{campus.name}</h2>
        <img src={campus.imageUrl} width="600"></img>
        <h3>{campus.address}</h3>
        <p>{campus.description}</p>
        <h3>
          {campus.students.length} Student
          {campus.students.length === 1 ? "" : "s"} Enrolled
        </h3>
        <ul>
          <h4>Enrolled Students:</h4>
          {campus.students.map((student) => (
            <EnrolledStudents key={student.id} data={student} />
          ))}
        </ul>
      </li>
    </div>
  );
}

export default Campus;
