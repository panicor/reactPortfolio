
import React from "react";
import { FaGithub } from 'react-icons/fa';
import "./index.css"


const Footer = () => {
    return (
      <footer >
     

          <div className="links">
            <a className="icon-link"
              href="https://github.com/panicor"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={50} className="icon" />
            </a>
          </div>

          <ul className="links text">
            <li>
              {" "}
              <a href="tel:727-459-8014">(727) 459-8014</a>{" "}
            </li>
            <li>
              {" "}
              <a
                href="mailto:rachelapanico@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                rachelapanico@gmail.com
              </a>{" "}
            </li>
            <li>
              {" "}
              <a
                href="https://www.linkedin.com/in/rachelpanico/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </li>
          </ul>
      
      </footer>
    );
}

export default Footer;
