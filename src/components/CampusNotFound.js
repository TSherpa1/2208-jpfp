import React from "react";
import { Link } from "react-router-dom";

function CampusNotFound() {
  return (
    <div id="not-found-page">
      <h1>Campus doesn't exist!</h1>
      <Link to="/">Back to Homepage</Link>
    </div>
  );
}

export default CampusNotFound;
