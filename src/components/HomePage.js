import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div id="homepage">
      <h1>Welcome To The Homepage!</h1>
      <div id="homepage-content">
        <img
          src="https://i.insider.com/5ed035253ad861442b005582?width=1200&format=jpeg"
          width="1300"
          height="650"
        ></img>
        <div id="links">
          <button>
            <Link className="link" to="/campuses">
              Go to Campuses
            </Link>
          </button>
          <button>
            <Link className="link" to="/students">
              Go to Students
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
