import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div id="not-found-page">
      <h1>Page Not Found!</h1>
      <Link to="/">Back to Homepage</Link>
    </div>
  );
}

export default NotFoundPage;
