import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { getStudent } from "../../store/studentStores/singleStudentStore";
import Student from "./Student";

function SingleStudent() {
  const student = useSelector((state) => state.singleStudent);
  const students = useSelector((state) => state.allStudents);
  const params = useParams();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getStudent(params.id));
  }, []);

  useEffect(() => {
    if (students.length > 0 && params.id > students.length) {
      navigate("/studentNotFound");
    }
  }, [students.length]);

  return <Student student={student} />;
}

export default SingleStudent;
