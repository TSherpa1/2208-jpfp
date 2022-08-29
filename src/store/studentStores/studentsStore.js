import axios from "axios";

const GET_ALL_STUDENTS = "GET_ALL_STUDENTS";

const _getStudents = (students) => ({
  type: GET_ALL_STUDENTS,
  students,
});

export const getStudents = () => {
  return async function (dispatch) {
    try {
      const { data } = await axios.get("/api/students");

      dispatch(_getStudents(data));
    } catch (error) {
      console.log(error);
    }
  };
};

const initialState = [];

const studentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_STUDENTS:
      return action.students;
    default:
      return state;
  }
};

export default studentsReducer;
