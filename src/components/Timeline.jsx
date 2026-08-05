import React from "react";
import "../style/Timeline.css";

export default function Timeline() {
  const technicalSkills = {
    IT: ["Windows OS", "Microsoft Office 365", "Active Directory", "VPN", "Remote Support"],
    Networking: ["TCP/IP", "DNS", "DHCP", "Network configuration", "Infrastructure Support"],
    "Web Technologies": ["HTML", "CSS", "JavaScript", "React", "Express.js", "MongoDB"],
    Tools: ["GitHub", "Visual Studio Code"]
  };

  const experience = [
    {
      date: "Oct 2025 - Present",
      title: "Operations Support Officer",
      company: "ST Engineering Operations Manning Centre",
      points: [
        "Monitor operational systems to ensure service availability.",
        "Perform first-level troubleshooting for system incidents.",
        "Escalate operational events to relevant support teams.",
        "Coordinate defect resolution through calls and group communication.",
        "Perform ad hoc operational and administrative duties."
      ]
    },
    {
      date: "Apr 2024 - Jul 2024",
      title: "IT Support",
      company: "Nanyang Tech at DBS Bank",
      points: [
        "Performed reimage of laptops and desktops for users.",
      ],
      quit: "Keep performing reimage of laptops and desktops for users, decided to move on to a better opportunity."
    },
     {
      date: "Jan 2024 - April 2024",
      title: "IT Support",
      company: "Sasel",
      points: [
        "Performed reimage of laptops and desktops for users.",
      ],
      quit: "Keep performing reimage of laptops and desktops for users, decided to move on to a better opportunity."
    },
    {
      date: "Dec 2022 - Jan 2024",
      title: "IT Support Specialist",
      company: "Agency for Integrated Care (AIC) - Under IBM",
      points: [
        "Provided technical support for users and IT equipment.",
        "Assisted with computer deployment and system configuration..",
        "Diagnosed and resolved hardware and software issues.",
        "Performed reimage of laptops and desktops for users.",
        "Worked closely with internal teams to resolve incidents efficiently."
      ],
      quit: "Have known the role and not satisfied with the growth opportunities, decided to move on to a better opportunity."
    },
     {
      date: "Sept 2022 - Nov 2022",
      title: "IT Support Specialist",
      company: "Prime Supermarket",
      points: [
        "Provided onsite IT support for office and retail users.",
        "Installed, configured and maintained desktop computers, printers and peripherals.",
         "Installed, configured and maintained desktop computers, printers and peripherals.",
         "Troubleshot hardware, software and network connectivity issues.",
         "Performed system deployment, software installation and workstation setup.",
         "Resolved user issues and provided technical assistance to ensure smooth daily operations."
      ],
      quit: "Job scope different from what was discussed during interview, decided to move on for other opportunity."
    },
    {
      date: "Jan 2022 - Aug 2022",
      title: "IT Support Specialist",
      company: "Outram Community Hospital (OCH) - Under IBM",
      points: [
        "Provided enterprise desktop support for end users.",
        "Troubleshot hardware, software and operating system issues.",
        "Installed and configured new computers and peripherals.",
        "Assisted users with technical issues and account-related requests."
      ],
      quit: "Tried to find better opportunity during reservist"
    }
  ];

  const education = [
    {
      year: "2026",
      title: "Diploma in Information Technology (Expected Aug 2026)",
      school: "Kaplan Singapore",
      modules: [
      "Computational Mathematics and Computer Architecture",
      "Introduction to Computer Science (C Programming)",
      "Principles of Information Systems",
      "Data Management & SQL Database",
      "Introduction to Data Communications",
      "Web Development (HTML, CSS, JavaScript)",
      "Introduction to Programming (Java)"
      ]
    },

    {
      year: "2025",
      title: "Full Stack Web Development with AI",
      school: "MAGES Institute of Excellence (IMDA TIPP)",
      modules: [
      "HTML5 & CSS3",
      "JavaScript (ES6+)",
      "React.js",
      "Node.js & Express.js",
      "MongoDB",
      "REST API Development",
      "Authentication & Authorization"
      ]
    },
    {
      year: "2021",
      title: "Advanced Certificate in Infocom Technology",
      school: "Lithan Academy",
      modules: [
        "Infrastructure Support",
        "Network Configuration",
        "Security Administration",
        "Problem Management",
        "System Integration"
      ]
    }
  ];

  return (
    <section id="timeline" className="py-5">
      <div className="container">

        {/* Technical Skills */}

        <section className="mb-5">

          <h2 className="text-center mb-5">Technical Skills</h2>

          <div className="row">

            {Object.entries(technicalSkills).map(([category, skills]) => (

              <div className="col-md-3 mb-4" key={category}>

                <div className="card h-100 shadow-sm">

                  <div className="card-body">

                    <h5 className="card-title">{category}</h5>

                    <ul className="list-group list-group-flush">

                      {skills.map((skill) => (

                        <li
                          key={skill}
                          className="list-group-item"
                        >
                          {skill}
                        </li>

                      ))}

                    </ul>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </section>

        {/* Experience */}

        <section className="mb-5">

          <h2 className="text-center mb-5">
            Professional Experience
          </h2>

          {experience.map((job, index) => (

            <div
              className="card mb-4 shadow-sm"
              key={index}
            >

              <div className="card-body">

                <div className="d-flex justify-content-between flex-wrap">

                  <div>

                    <h4>{job.title}</h4>

                    <h6 className="text-primary">
                      {job.company}
                    </h6>

                  </div>

                  <span className="text-light fw-bold">
                    {job.date}
                  </span>

                </div>

                <ul className="mt-3">

                  {job.points.map((point, i) => (

                    <li key={i}>{point}</li>

                  ))}

                </ul>
                {job.quit && (
                  <p className="text-danger fw-bold mt-5">
                    <strong>Reason for leaving:</strong> {job.quit}
                  </p>
                )}
              </div>

            </div>

          ))}

        </section>

        {/* Education */}

        <section>

          <h2 className="text-center mb-5">
            Education & Certifications
          </h2>

          <div className="row">

            {education.map((item, index) => (

              <div
                className="col-md-4 mb-4"
                key={index}
              >

                <div className="card h-100 shadow-sm">

                  <div className="card-body">

                    <h5>{item.title}</h5>

                    <p className="text-muted mb-0">
                      {item.school}
                    </p>

                    <small className="text-secondary">
                      {item.year}
                    </small>

                    <hr/>

                     <h6>Relevant Coursework</h6>

                    <ul>
                      {item.modules.map((module) => (
                        <li key={module}>{module}</li>
                      ))}
                    </ul>
                  </div>

                </div>

              </div>

            ))}

          </div>

        </section>

      </div>
    </section>
  );
}