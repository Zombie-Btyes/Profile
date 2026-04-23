import React from 'react';
import ProjectCard from './ProjectCard';
import charAI from '../assets/charAI.png';
import chat from '../assets/chat.png';
import '../style/Portfolio.css';

export default function Portfolio() {
  const projects = [
    {
      image: chat,
      title: "Chat App",
      description: "Real-time chat application with multimedia support and AI integration.",
      tags: ["React", "Express.js", "MongoDB"],
      projectUrl: "https://talknest-blond.vercel.app/" // Add this
    },
    {
      image: charAI,
      title: "Home Business",
      description: "Website for my mother business",
      tags: ["HTML", "CSS", "JavaScript"],
      projectUrl: "" // Add this
    }
  ];

  return (
    <section id="portfolio">
      <div className="container">
        <h2>My Portfolio</h2>
        <p className="portfolio-intro">Here are some of my recent projects...</p>
        <div className="portfolio-projects">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              image={project.image}
              title={project.title}
              description={project.description}
              tags={project.tags}
              projectUrl={project.projectUrl} // Pass the URL here
            />
          ))}
        </div>
      </div>
    </section>
  );
}