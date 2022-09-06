import React from "react";
import { Link } from "react-router-dom";

function StudentNotFound() {
  return (
    <div id="not-found-page">
      <h1>Student doesn't exist!</h1>
      <Link to="/">Back to Homepage</Link>
    </div>
  );
}

export default StudentNotFound;
