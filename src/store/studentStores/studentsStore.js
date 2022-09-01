import axios from "axios";

const GET_ALL_STUDENTS = "GET_ALL_STUDENTS";
const ADD_STUDENT = "ADD_STUDENT";
const DELETE_STUDENT = "DELETE_STUDENT";

const _getStudents = (students) => ({
  type: GET_ALL_STUDENTS,
  students,
});

const _addStudent = (student) => ({
  type: ADD_STUDENT,
  student,
});

const _deleteStudent = (student) => ({
  type: DELETE_STUDENT,
  student,
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

export const addStudent = (student) => {
  return async function (dispatch) {
    try {
      const { data } = await axios.post("/api/students", student);
      dispatch(_addStudent(data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteStudent = (id) => {
  return async function (dispatch) {
    try {
      const { data } = await axios.delete(`/api/students/${id}`);
      dispatch(_deleteStudent(data));
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
    case ADD_STUDENT:
      return [...state, action.student];
    case DELETE_STUDENT:
      return state.filter((student) => student.id !== action.student.id);
    default:
      return state;
  }
};

export default studentsReducer;
