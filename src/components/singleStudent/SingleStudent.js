import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getStudent } from "../../store/studentStores/singleStudentStore";

function SingleStudent() {
  const student = useSelector((state) => state.singleStudent);
  const params = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getStudent(params.id));
  }, []);

  let campus = student.campus || {};

  return (
    <div>
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
          {student.firstName} {student.lastName} is not currently studying at a
          university!
        </p>
      )}
    </div>
  );
}

export default SingleStudent;
