import axios from "axios";

const GET_SINGLE_CAMPUS = "GET_SINGLE_CAMPUS";

const _getCampus = (campus) => ({
  type: GET_SINGLE_CAMPUS,
  campus,
});

export const getCampus = (id) => {
  return async function (dispatch) {
    try {
      const { data } = await axios.get(`/api/campuses/${id}`);
      dispatch(_getCampus(data));
    } catch (error) {
      console.log(error);
    }
  };
};

const initialState = {};
const singleCampusReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SINGLE_CAMPUS:
      return action.campus;
    default:
      return state;
  }
};

export default singleCampusReducer;
