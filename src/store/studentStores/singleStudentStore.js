import axios from "axios";

const GET_SINGLE_STUDENT = "GET_SINGLE_STUDENT";
const UPDATE_SINGLE_STUDENT = "UPDATE_SINGLE_STUDENT";

const _getStudent = (student) => ({
  type: GET_SINGLE_STUDENT,
  student,
});

const _updateStudent = (student) => ({
  type: UPDATE_SINGLE_STUDENT,
  student,
});

export const getStudent = (id) => {
  return async function (dispatch) {
    try {
      const { data } = await axios.get(`/api/students/${id}`);
      dispatch(_getStudent(data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateStudent = (student) => {
  return async function (dispatch) {
    // console.log("student", student);
    try {
      const { data } = await axios.put(`/api/students/${student.id}`, student);
      console.log("update student:", data);
      dispatch(_updateStudent(data));
    } catch (error) {
      console.log(error);
    }
  };
};

const initialState = {};
const singleStudentReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SINGLE_STUDENT:
      return action.student;
    case UPDATE_SINGLE_STUDENT:
      return action.student;
    default:
      return state;
  }
};

export default singleStudentReducer;
