import React from "react";
import "../style/Contact.css";

export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <div className="text-center mb-5">
          <h2>Let's Connect</h2>
          <p className="lead text-light fw-bold">
            Feel free to reach out for software development, IT support, or game development opportunities.
          </p>
        </div>
        <div className="contact-cards">

          {/* Email */}
          <div className="contact-card">
            <div className="contact-icon">
              <i className="bi bi-envelope-fill"></i>
            </div>
            <h3>Email</h3>
            <p>
              junxiang12321@gmail.com
            </p>
            <a
              href="mailto:junxiang12321@gmail.com"
              className="contact-btn"
            >
              Send Email
            </a>
          </div>

          {/* GitHub */}

          <div className="contact-card">
            <div className="contact-icon">
              <i className="bi bi-github"></i>
            </div>
            <h3>GitHub</h3>

            <p>
              View my projects and source code.
            </p>

            <a
              href="https://github.com/Zombie-Btyes"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-btn"
            >
              Visit GitHub
            </a>
          </div>

          {/* LinkedIn */}

          <div className="contact-card">
            <div className="contact-icon">
              <i className="bi bi-linkedin"></i>
            </div>
            <h3>LinkedIn</h3>

            <p>
              Let's connect professionally.
            </p>

            <a
              href="https://linkedin.com/in/jun-xiang-yeo-20a62520b"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-btn"
            >
              View Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}