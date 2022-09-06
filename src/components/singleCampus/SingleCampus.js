import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { getCampus } from "../../store/campusStores/singleCampusStore";
import EnrolledStudents from "./EnrolledStudents";
import UpdateCampusForm from "./UpdateCampusForm";
import NotFoundPage from "../NotFoundPage";

function SingleCampus() {
  const campus = useSelector((state) => state.singleCampus);
  const campuses = useSelector((state) => state.allCampuses);
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getCampus(params.id));
  }, []);

  useEffect(() => {
    if (params.id > campuses.length) {
      navigate("*");
    }
  }, [campuses.length]);

  return (
    <div id="single-campus">
      <div id="campus-info">
        <h1>{campus.name}</h1>
        <img src={campus.imageUrl} width="600"></img>
        <h3>{campus.address}</h3>
        <p>{campus.description}</p>
        <h4>
          {campus.students && campus.students.length > 0
            ? `Enrolled Students 
      (${campus.students && campus.students.length}):`
            : "There are no students enrolled into this university yet!"}
        </h4>
      </div>
      <ul id="enrolled-students">
        {campus.students &&
          campus.students.map((student) => (
            <EnrolledStudents key={student.id} data={student} />
          ))}
      </ul>
      <UpdateCampusForm campus={campus} />
    </div>
  );
}

export default SingleCampus;
