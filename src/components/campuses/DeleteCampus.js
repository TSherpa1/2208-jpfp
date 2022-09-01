import React from "react";
import { useDispatch } from "react-redux";
import { deleteCampus } from "../../store/campusStores/campusesStore";

function DeleteCampus(props) {
  console.log("props:", props.campusId);
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteCampus(props.campusId));
  };
  return (
    <button id="delete-campus" onClick={handleDelete}>
      X
    </button>
  );
}

export default DeleteCampus;
