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
          <h2 className="headers">About Me</h2>
        </div>
        <div className="array">
          <p>
            Software engineer with a certificate from UCF’s Web Development
            Bootcamp and leveraging a B.S. in Cell and Molecular Biology. The
            combination of applied interpersonal skills and analytical thinking
            define a collaborative, communicative, and self-motivated
            problem-solver that is ready to take on the challenges of the
            fast-paced workday.
          </p>
        </div>
      </div>

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
              <p className="undertext">Third-party weather APIs were used to fetch weather data and display it.Use of multiple dynamic URLs to fetch the coordinates of the input cities was needed as well.</p>
            
            </div>

            <div className="bigpic">
              <a href="https://github.com/RLAQUEA/Parks-and-Pages">
                <img src={parkspic} alt="work picture2" />
              </a>
              <div className="text">Parks & Pages</div>
              <p className="undertext">A search tool for the avid hiker and reader. The user can search for their state, and a list of parks and a map showing the park locations shows up. The Google Books API was used to show book results that are related to the park.</p>
            </div>
          </div>

          <div class="row">
            <div className="bigpic">
              <a href="https://panicor.github.io/noteTaker/">
                <img src={notepic} alt="work picture3" />
              </a>
              <div className="text">Note Taker</div>
              <p className="undertext">This project uses express.js and node.js to create an intuitive app that adds and deletes notes from a list.</p>
            </div>

            <div className="bigpic">
              <a href="https://panicor.github.io/teamProfileGenerator/">
                <img src={employeepic} alt="work picture4" />
              </a>
              <div className="text">Employee Tracker</div>
              <p className="undertext">A command-line application that tracks employee information using Inquirer and a database connention. Content Management Systems like this are very useful.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
