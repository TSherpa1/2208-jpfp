import axios from "axios";

const GET_ALL_CAMPUSES = "GET_ALL_CAMPUSES";

const _getCampuses = (campuses) => ({
  type: GET_ALL_CAMPUSES,
  campuses,
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

const initialState = [];

const campusesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_CAMPUSES:
      return action.campuses;
    default:
      return state;
  }
};

export default campusesReducer;
