import axios from "axios";

const GET_SINGLE_CAMPUS = "GET_SINGLE_CAMPUS";
const UPDATE_SINGLE_CAMPUS = "UPDATE_SINGLE_CAMPUS";

const _getCampus = (campus) => ({
  type: GET_SINGLE_CAMPUS,
  campus,
});

const _updateCampus = (campus) => ({
  type: UPDATE_SINGLE_CAMPUS,
  campus,
});

export const getCampus = (id) => {
  return async function (dispatch) {
    try {
      const { data } = await axios.get(`/api/campuses/${id}`);
      console.log("GET:", data);
      dispatch(_getCampus(data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateCampus = (campus) => {
  return async function (dispatch) {
    try {
      const { data } = await axios.put(`/api/campuses/${campus.id}`, campus);
      dispatch(_updateCampus(data));
    } catch (error) {
      console.log(error);
    }
  };
};

const initialState = {};
const singleCampusReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SINGLE_CAMPUS:
      // console.log("GET reducer", action.campus);
      return action.campus;
    case UPDATE_SINGLE_CAMPUS:
      // console.log("UPDATE reducer", action.campus);
      return action.campus;
    default:
      return state;
  }
};

export default singleCampusReducer;
