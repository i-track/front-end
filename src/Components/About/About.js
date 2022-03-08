import React from "react";
import * as IoIcons from "react-icons/io";

const About = () => {
  return (
    <div className="about-me-container">
      <h1>About us</h1>
      <div className="goal-container">
        <h2>Our Goal:</h2>
        <p>
          Our users' typically have the responsibility of managing large groups
          of people. They can create departments and add or delete members so
          that they can better understand the structure of their business.
        </p>
      </div>
      <div className="developers-container">
        <h1>Contributors:</h1>
        <div className="anthony-container">
          <h2>Anthony Kowalkowski</h2>
          <a>
            <IoIcons.IoLogoGithub />
          </a>
        </div>
        <div className="jerry-container">
          <h2>Jerry Sea</h2>
          <a>
            <IoIcons.IoLogoGithub />
          </a>
        </div>
        <div className="isaac-container">
          <h2>Isaac Ruiz</h2>
          <a>
            <IoIcons.IoLogoGithub />
          </a>
        </div>
        <div className="kc-container">
          <h2>KC. Anyalebechi</h2>
          <a>
            <IoIcons.IoLogoGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
