import React, { useEffect } from "react";
import { Route, Routes, Link, useParams } from "react-router-dom";
import {
  Campuses,
  HomePage,
  Students,
  Navbar,
  SingleCampus,
  SingleStudent,
  NotFoundPage,
  StudentNotFound,
  CampusNotFound,
} from "./components";
import { useDispatch } from "react-redux";
import { getCampuses } from "./store/campusStores/campusesStore";
import { getStudents } from "./store/studentStores/studentsStore";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCampuses());
    dispatch(getStudents());
  }, [dispatch]);
  const params = useParams();

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route index path={"/"} element={<HomePage />} />
        <Route path={"/campuses"} element={<Campuses />} />
        <Route path={"/students"} element={<Students />} />
        <Route path={"/students/:id"} element={<SingleStudent />} />
        <Route path={"/campuses/:id"} element={<SingleCampus />} />
        <Route path={"*"} element={<NotFoundPage />} />
        <Route path={"/studentNotFound"} element={<StudentNotFound />} />
        <Route path={"/campusNotFound"} element={<CampusNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
