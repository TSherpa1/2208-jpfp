import React from "react";
import { useDispatch } from "react-redux";
import { updateStudent } from "../../store/studentStores/singleStudentStore";
import { getCampus } from "../../store/campusStores/singleCampusStore";

function UnregisterStudent(props) {
  const student = props.student;

  const dispatch = useDispatch();

  const handleClick = async (event) => {
    event.preventDefault();

    await dispatch(updateStudent({ ...student, campusId: null }));
    //line 16 triggers a re-render
    //using async/await to make these two dispatches run in order (first update the single student's campus id, then get the data for the single campus)
    //dont forget, this component is in the SingleCampus component, so you can get the campus thorugh student.CampusId and SingleCampus component then uses the singleCampus store's state with useSelector
    await dispatch(getCampus(student.campusId));
  };

  return (
    <button id="unregister-student" onClick={handleClick}>
      Unregister Student
    </button>
  );
}

export default UnregisterStudent;
