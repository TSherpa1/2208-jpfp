import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import campusesReducer from "./campusStores/campusesStore";
import studentsReducer from "./studentStores/studentsStore";
import singleStudentReducer from "./studentStores/singleStudentStore";
import singleCampusReducer from "./campusStores/singleCampusStore";

const allReducers = combineReducers({
  allCampuses: campusesReducer,
  allStudents: studentsReducer,
  singleStudent: singleStudentReducer,
  singleCampus: singleCampusReducer,
});

function configureStore() {
  return createStore(allReducers, applyMiddleware(thunk));
}

//exporting configureStore like this may not work
export default configureStore;
