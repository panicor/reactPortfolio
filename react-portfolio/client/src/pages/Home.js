import React from "react";
import "./Home.css";
// import parksPagesImg from "../Assets/img/Parks&Pages.png";
// import catQuizImg from "../Assets/img/CatQuiz.png";
// import inMarketHomeImg from "../Assets/img/InMarket.png";
// import weatherDashImg from "../Assets/img/weatherDash.png";


function Projects() {
    return (
        <div className="container">
            <div className="second" id="work">
          <h2 className="headers">Work</h2>
          <div className="array">
            <div className="bigpic">
                <a href="https://panicor.github.io/weatherDashboard/">
            <img  src="assets/weatherpic.png" alt="work picture1"/>
              </a> 
              <div>
                Weather Dashboard
              </div>
            </div>

             {/* <figure>
              <a href="https://rlaquea.github.io/project-1/"> */}
               {/* <img src="assets/parksandpages.png" alt="header picture2"/>
            </a>
            <figcaption>
              Parks & Pages
            </figcaption>
          </figure>

            <figure>
              <a href="https://panicor.github.io/codeQuiz/">
              <img src="assets/codequiz.png" alt="header picture3"/>
            </a>
            <figcaption>
              Code Quiz
            </figcaption>
          </figure>

          <figure>
            <a href="https://panicor.github.io/workDayScheduler/">
            <img src="assets/workscheduler.png" alt="header picture4"/> 
          </a> 
          <figcaption>
            Work Day Scheduler
          </figcaption>
        </figure>
        <figure>
          <a href="https://panicor.github.io/passwordGenerator/">
          <img src="assets/passwordgen.png" alt="header picture5"/> 
        </a> 
        <figcaption>
          Password Generator
        </figcaption>
      </figure>
          </article>*/}
          
      </div>
        </div> 
        </div> 
    );
}

export default Projects;