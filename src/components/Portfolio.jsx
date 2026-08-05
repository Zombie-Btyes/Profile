import React from 'react';
import ProjectCard from './ProjectCard';
import charAI from '../assets/charAI.png';
import chat from '../assets/chat.png';
import resume from '../assets/resume.png';
import '../style/Portfolio.css';

export default function Portfolio() {
  const projects = [
    {
      image: resume,
      title: "Website profile",
      description: "Website of my own profile, showcasing my skills, projects, and experience in software development.",
      tags: ["HTML", "CSS", "JavaScript"],
      projectUrl: "https://zombie-btyes.github.io/Resume/" // Add this
    }
  ];

  return (
    <section id="portfolio">
      <div className="container">
        <h2>Personal Technical Projects</h2>
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