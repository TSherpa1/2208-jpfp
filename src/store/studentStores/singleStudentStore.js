import axios from "axios";

const GET_SINGLE_STUDENT = "GET_SINGLE_STUDENT";

const _getStudent = (student) => ({
  type: GET_SINGLE_STUDENT,
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

const initialState = {};
const singleStudentReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SINGLE_STUDENT:
      return action.student;
    default:
      return state;
  }
};

export default singleStudentReducer;
