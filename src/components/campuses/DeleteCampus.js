import React from "react";
import { useDispatch } from "react-redux";
import { deleteCampus } from "../../store/campusStores/campusesStore";

function DeleteCampus(props) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteCampus(props.campusId));
  };
  return <button onClick={handleDelete}>X</button>;
}

export default DeleteCampus;
