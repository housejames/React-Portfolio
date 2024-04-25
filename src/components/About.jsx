import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <img src="/james-profile.jpg" alt="James House" className="profile-photo" />
      <h1>About Me</h1>
      <p>Hello, my name is James House. I graduated from the University of California, Riverside in 2022 with a degree in History. After graduating, I delved into the world of Information Technology (IT), where I gained valuable experience working in the field for a year. During my time in IT, I developed a strong foundation in various aspects of technology and honed my problem-solving skills.

Driven by my passion for programming and a desire to expand my skill set, I decided to enroll in the Coding Bootcamp at the University of California, Irvine. Through this intensive program, I have immersed myself in the world of web development, learning languages like HTML, CSS, and JavaScript.

I am excited about the endless possibilities that coding offers and am eager to apply my newfound skills to real-world projects. My journey in coding has just begun, and I am enthusiastic about the opportunities ahead to innovate, create, and make a positive impact through technology.</p>
    </div>
  );
};

export default About;
