import React from "react";
import { useDispatch } from "react-redux";
import { deleteStudent } from "../../store/studentStores/studentsStore";

function DeleteStudent(props) {
  const studentId = props.studentId;
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteStudent(studentId));
  };
  return <button onClick={handleDelete}>X</button>;
}

export default DeleteStudent;
