function Projects() {
  const projects = [
    {
      title: "Cravora",
      status: "Functional Application",
      projectType: "Individual Project",
      category: "Full Stack Development",
      description:
        "A Django-based restaurant delivery application featuring food browsing, cart management, checkout and Razorpay payment integration.",
      highlights: [
        "Developed food browsing and product selection functionality",
        "Implemented cart management and checkout",
        "Integrated Razorpay payment gateway"
      ],
      technologies: [
        "Python",
        "Django",
        "HTML",
        "CSS",
        "JavaScript",
        "Razorpay"
      ],
      image: "/projects/cravora.png",
      github: "https://github.com/Medhasreekonka/Cravora",
      demo: "https://cravora-d8zz.onrender.com/"
    },
    {
      title: "TaskMate",
      status: "Functional Application",
      projectType: "Individual Project",
      category: "Frontend Development",
      description:
        "A React-based task management application designed to organize, manage and track daily tasks through an interactive user interface.",
      highlights: [
        "Developed task creation and management functionality",
        "Organized daily activities through an interactive interface",
        "Implemented task progress tracking"
      ],
      technologies: ["React.js", "JavaScript", "HTML", "CSS"],
      image: "/projects/taskmate.png",
      github: "https://github.com/Medhasreekonka/TaskMate",
      demo: "https://medhasreekonka.github.io/TaskMate/"
    },
    {
      title: "Pizza Sales Dashboard",
      status: "Analytics Dashboard",
      projectType: "Individual Project",
      category: "Data Analytics",
      description:
        "A sales analytics project using Python, SQL and Power BI to analyze revenue, customer orders, product performance and business trends.",
      highlights: [
        "Analyzed sales and revenue trends",
        "Explored product and order performance",
        "Created Power BI visualizations to present business insights"
      ],
      technologies: ["Python", "SQL", "Power BI", "Pandas"],
      image: "/projects/pizza-sales.png",
      github: "https://github.com/Medhasreekonka/pizza-sales-analysis"
    },
    {
      title: "Smart Attendance System",
      status: "Under Redevelopment",
      projectType: "Individual Project",
      category: "AI & Computer Vision",
      description:
        "An automated attendance management system based on face recognition and object tracking to identify individuals and maintain attendance records.",
      highlights: [
        "Applied FaceNet for face recognition",
        "Used YOLO and DeepSORT for object detection and tracking",
        "Worked with MySQL for attendance record management"
      ],
      technologies: [
        "Python",
        "YOLO",
        "FaceNet",
        "DeepSORT",
        "MySQL",
        "Streamlit"
      ],
      github: "https://github.com/Medhasreekonka/Smart-attendance-system"
    }
  ];

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <div className="projects-heading">
          <span className="section-subtitle">MY WORK</span>
          <h2>Featured Projects</h2>
          <p>
            A collection of projects independently designed and developed by me,
            showcasing my work across software development, data analytics and
            artificial intelligence.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article className="project-card reveal" key={project.title}>
              <div className="project-image">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    loading="lazy"
                  />
                ) : (
                  <div className="project-image-placeholder">
                    <span>AI &amp; COMPUTER VISION</span>
                    <strong>{project.title}</strong>
                    <small>Face Recognition · Object Tracking</small>
                  </div>
                )}
              </div>

              <div className="project-top">
                <span className="project-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="project-category">{project.category}</span>
              </div>

              <div className="project-labels">
                <span className="project-status">{project.status}</span>
                <span className="project-type">{project.projectType}</span>
              </div>

              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>

              <div className="project-highlights">
                <h4>Key Contributions</h4>
                <ul>
                  {project.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>

              <div className="project-technologies">
                {project.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <div className="project-links">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub ↗
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo ↗
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
