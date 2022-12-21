import React from "react";
import { Link } from "react-router-dom";
import homepageTeam from "../assets/team-building.png";
// Style
import "../styles/homepage.css";

export function Homepage() {
  return (
    <section>
      <div className="homepage">
        <div className="redirect-btn">
          <div className="">
            <Link to="/employees">
              <button className="homepage-btn">SEE EMPLOYEES</button>
            </Link>
          </div>
          <div className="">
            <Link to="/employees/add">
              <button className="homepage-btn">ADD EMPLOYEE</button>
            </Link>
          </div>
        </div>
        <img className="teamPix" src={homepageTeam} alt="" />
      </div>
    </section>
  );
}
