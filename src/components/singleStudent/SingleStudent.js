import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getStudent } from "../../store/studentStores/singleStudentStore";
import Student from "./Student";

function SingleStudent() {
  const student = useSelector((state) => state.singleStudent);
  const params = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getStudent(params.id));
  }, []);

  return <Student student={student} />;
}

export default SingleStudent;
