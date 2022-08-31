import axios from "axios";

const GET_ALL_CAMPUSES = "GET_ALL_CAMPUSES";
const ADD_CAMPUS = "ADD_CAMPUS";

const _getCampuses = (campuses) => ({
  type: GET_ALL_CAMPUSES,
  campuses,
});

const _addCampus = (campus) => ({
  type: ADD_CAMPUS,
  campus,
});

export const getCampuses = () => {
  return async function (dispatch) {
    try {
      const { data } = await axios.get("/api/campuses");
      dispatch(_getCampuses(data));
      // console.log("thunk data:", data);
    } catch (error) {
      console.log(error);
    }
  };
};

export const addCampus = (campus) => {
  return async function (dispatch) {
    try {
      const { data } = await axios.post("/api/campuses", campus);
      console.log("Thunk", data);
      dispatch(_addCampus(data));
    } catch (error) {
      console.log(error);
    }
  };
};

const initialState = [];

const campusesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_CAMPUSES:
      return action.campuses;
    case ADD_CAMPUS:
      console.log("Reducer:", action.campus);
      return [...state, action.campus];
    default:
      return state;
  }
};

export default campusesReducer;
