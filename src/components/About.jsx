import React from "react";
import "../style/About.css";

export default function About() {
  return (
    <section id="about" className="py-5">
      <div className="container">

        <div className="text-center mb-5">
          <h1>Professional Summary</h1>
          <p className="lead text-light fw-bold">
            Full Stack Web Developer | Enterprise IT Support
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-10">

            <div className="about-card">

              <p>
                IT Support Specialist with over two years of experience providing enterprise desktop support, troubleshooting hardware and software issues, software deployment, user account administration, and incident resolution. Skilled in Windows environments, networking fundamentals, SQL, JavaScript, React, and Git. Passionate about infrastructure support, system administration, continuous learning, and delivering reliable IT solutions.
            </p>

              <p>
                Passionate about building modern web applications, continuously
                improving my technical skills, and contributing to innovative
                software solutions. I am seeking opportunities as a
                <strong> Full Stack Developer</strong>,
                <strong> Software Engineer</strong>, or
                <strong> IT Support Engineer</strong>.
              </p>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}