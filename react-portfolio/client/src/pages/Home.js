import React from "react";
import "./Home.css";
import weatherpic from "../assets/weatherpic.png";
import notepic from "../assets/notetaker.png";
import parkspic from "../assets/parksandpages.png";
import employeepic from "../assets/employeepic.png";

function Projects() {
  return (
    <div className="container">
      <div className="second" id="work">
        <div className="worksize">
        <h2 className="headers">Work</h2>
        </div>
        <div className="array">
         
          <div class="row">
            <div className="bigpic">
              <a href="https://panicor.github.io/weatherDashboard/">
                <img src={weatherpic} alt="work picture1" />
              </a>
              <div className="text">Weather Dashboard</div>
            </div>

            <div className="bigpic">
              <a href="https://github.com/RLAQUEA/Parks-and-Pages">
                <img
                  src={parkspic}
                  alt="work picture2"
                />
              </a>
              <div className="text">Parks & Pages</div>
            </div>
          </div>

          <div class="row">
          <div className="bigpic">
            <a href="https://panicor.github.io/noteTaker/">
              <img src={notepic} alt="work picture3" />
            </a>
            <div className="text" >Note Taker</div>
          </div>

          <div className="bigpic">
            <a href="https://panicor.github.io/teamProfileGenerator/">
              <img
                src={employeepic}
                alt="work picture4"
              />
            </a>
            <div className="text">Employee Tracker</div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Projects;
