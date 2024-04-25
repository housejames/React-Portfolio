import React from 'react';
import './Resume.css'; // Import the CSS file for styling

const Resume = () => {
  return (
    <div className="resume-container">
      <h1 className="resume-heading">Resume</h1>
      <p className="resume-text">Download my resume:</p>
      <a href="/james-house-resume.pdf" download className="resume-link">Download Resume</a>
      <ul className="skills-list">
        <li className='skill'>I am Proficient in:</li>
        <li className="skill">HTML</li>
        <li className="skill">CSS</li>
        <li className="skill">JavaScript</li>
      </ul>
    </div>
  );
};

export default Resume;
