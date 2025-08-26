// Welcome.jsx
import React from "react";
import "../../style/about.css";
import { ReactComponent as Pattern } from "../../Images/About imgs/Abstract Design (3).svg";

export default function AcademicWelcomeSec() {
  return (
    <div className="welcome-container">
      <div className="pattern">
        <Pattern />
      </div>

      <div className="welcome-content">
        <div className="welcome-left">
          <button className="overview-btn">Academics</button>
          <h1 className="welcome-title">Nurturing Young Minds for Success</h1>
        </div>
        <div className="welcome-right">
          <p className="welcome-text">
            Welcome to our Academics page, where we take pride in providing a
            comprehensive and stimulating educational experience for your child.
            Our kindergarten school's academic program is thoughtfully designed
            to foster a love for learning while building a strong foundation of
            essential skills and knowledge. From language arts and mathematics
            to science and social studies, our curriculum is carefully crafted
            to spark curiosity and encourage active exploration.
          </p>
        </div>
      </div>
    </div>
  );
}
