import React from "react";
import * as IoIcons from "react-icons/io";
import "./About.css"

const About = () => {
  return (
    <div className="about-me-container">
      <h1>About us</h1>
      <div className="goal-container">
        <h2>Our Goal</h2>
        <p>
          Our users' typically have the responsibility of managing large groups
          of people. They can create departments and add or delete members so
          that they can better understand the structure of their business.
        </p>
      </div>
      <h1 className="contributor-title">Contributors</h1>
      <div className="developers-container">
        <div className="developer-container">
          <h2>Anthony Kowalkowski</h2>
          <a className="icon" href="https://github.com/adkowalkowski" target="_blank">
            <IoIcons.IoLogoGithub />
          </a>
        </div>
        <div className="developer-container">
          <h2>Jerry Sea</h2>
          <a className="icon" href="https://github.com/seajerry" target="_blank">
            <IoIcons.IoLogoGithub />
          </a>
        </div>
        <div className="developer-container">
          <h2>Isaac Ruiz</h2>
          <a className="icon" href="https://github.com/isaacruiz0" target="_blank">
            <IoIcons.IoLogoGithub />
          </a>
        </div>
        <div className="developer-container">
          <h2>KC. Anyalebechi</h2>
          <a className="icon" href="https://github.com/sabbathcoder" target="_blank">
            <IoIcons.IoLogoGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
