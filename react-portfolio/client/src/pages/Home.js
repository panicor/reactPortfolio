import React from "react";
import "./Home.css";
import weatherpic from "../assets/weatherpic.png";
import freqpic from "../assets/frequencies.PNG";
import parkspic from "../assets/parksandpages.png";
import profilepic from "../assets/profilepic.jpg";

function Projects() {
  return (
    <div className="container">
      <div className="second" id="work">
        <div className="worksize">
          <h2 className="headers">About Me</h2>
        </div>
        <div className="array1">
          <p className="aboutme">
            Software engineer with a certificate from UCF’s Web Development
            Bootcamp and leveraging a B.S. in Cell and Molecular Biology. The
            combination of applied interpersonal skills and analytical thinking
            define a collaborative, communicative, and self-motivated
            problem-solver that is ready to take on the challenges of the
            fast-paced workday.
          </p>
          <div className="profilepicture">
            <img className="image" src={profilepic} alt="profile" />
          </div>
        </div>
      </div>

      <div className="second" id="work">
        <div className="worksize">
          <h2 className="headers">Work</h2>
        </div>
        <div className="array">
          <div className="row">
            <div className="bigpic">
              <a href="https://desolate-garden-53776.herokuapp.com/" target="_blank" rel="noreferrer">
                <img className="image" src={freqpic} alt="work picture3" />
              </a>
              <div className="text">Frequencies</div>
              <p className="undertext">
              This is a full-stack React application that serves as an interactive sound therapy tool. This is an application that is designed to help people heal through sound while also being a full MERN stack application. MongDB, Apollo Express Server, React, & Node.js were used to create this app.
              </p>
              <p className="undertext underlink">
                <a href="https://github.com/RLAQUEA/frequencies">
                  GitHub Repository
                </a>
              </p>
            </div>

            <div className="bigpic">
              <a href="https://rlaquea.github.io/Parks-and-Pages/" target="_blank" rel="noreferrer">
                <img className="image" src={parkspic} alt="work picture2" />
              </a>
              <div className="text">Parks & Pages</div>
              <p className="undertext">
                A search tool for the avid hiker and reader. The user can search
                for their state, and a list of parks and a map showing the park
                locations shows up. The Google Books API was used to show book
                results that are related to the park.
              </p>
              <p className="undertext underlink">
                <a href="https://github.com/RLAQUEA/Parks-and-Pages">
                  GitHub Repository
                </a>
              </p>
            </div>
          </div>

          <div className="row">
            <div className="bigpic">
              <div className="picpart">
                <a href="https://panicor.github.io/weatherDashboard/" target="_blank" rel="noreferrer">
                  <img className="image" src={weatherpic} alt="work picture1" />
                </a>
              </div>
              <div className="textpart">
                <div className="text">Weather Dashboard</div>
                <p className="undertext">
                  Third-party weather API OpenWeather One Call was used to fetch
                  weather data and display it. Use of multiple dynamic URLs to
                  fetch the coordinates of the input cities was needed as well.
                </p>
                <p className="undertext underlink">
                  <a href="https://github.com/panicor/weatherDashboard">
                    GitHub Repository
                  </a>
                </p>
              </div>
            </div>

            <div className="bigpic">
              <iframe
                title="video"
                className="image"
                src="https://drive.google.com/file/d/1EEbuQIO29Aeqf429YQne70gaexWI-NHM/preview"
              />
              <div className="text">Employee Tracker</div>
              <p className="undertext">
                A command-line application that tracks employee information
                using Inquirer and a database connention. Content Management
                Systems like this are very useful.
              </p>
              <p className="undertext underlink">
                <a href="https://github.com/panicor/employeeTracker">
                  GitHub Repository
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="second" id="work">
        <div className="worksize">
          <h2 className="headers">Technologies</h2>
        </div>
        <div className="array">
          <p>
            HTML5 | CSS3 | JavaScript | Node.js | JQuery | Express.js | MongoDB
            | MySQL2 | React.js
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
