import React, { useEffect } from "react";
import { Route, Routes, Link } from "react-router-dom";
import { Campuses, HomePage, Students, Navbar } from "./components";
import { useDispatch } from "react-redux";
import { getCampuses } from "./store/campusStores/campusesStore";
import { getStudents } from "./store/studentStores/studentsStore";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCampuses());
    dispatch(getStudents());
  }, [dispatch]);

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route index path={"/"} element={<HomePage />} />
        <Route path={"/campuses"} element={<Campuses />} />
        <Route path={"/students"} element={<Students />} />
        <Route path={"*"} element={<h1>Page Not Found!</h1>} />
      </Routes>
    </div>
  );
}

export default App;
