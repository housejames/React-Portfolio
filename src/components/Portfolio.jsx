import React from 'react';
import './Portfolio.css'; 

const Portfolio = () => {
  // add more objects to my array
  const projects = [
    {
      title: "Reel Radar",
      description: "In this group project we worked together to create a user based movie review site where you can create an account and review any movie!",
      imageUrl: "/reel.png",
      repoUrl: "https://github.com/housejames/Movie-Review-Database-Project"
    },
    {
        title: "Meowdle",
        description: "Inspired by games like wordle and pokedle our group sought to create a cat breed guessing game. We came up with Meowdle!",
        imageUrl: "/meowdle.png",
        repoUrl: "https://github.com/housejames/Meowdle"
      },
      {
        title: "Weather dashboard",
        description: "This is a weather dashboard I created using a weather API where you can view the forecast for any city and access the previously searched cities.",
        imageUrl: "/weather.png",
        repoUrl: "https://github.com/housejames/Weather-Dashboard"
      },
  ];

  return (
    <div className="portfolio">
      {projects.map((project, index) => (
        <div key={index} className="portfolio-item">
          <img src={project.imageUrl} alt={project.title} className="portfolio-img" />
          <div className="portfolio-description">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.repoUrl} className="portfolio-link" target="_blank" rel="noopener noreferrer">View Code</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Portfolio;