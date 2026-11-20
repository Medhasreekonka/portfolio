
function Skills() {
  const skillCategories = [
    {
      title: "Software Development",
      description: "Building web applications and software solutions",
      skills: [
        "Java",
        "Python",
        "JavaScript",
        "HTML",
        "CSS",
        "React.js",
        "Spring Boot",
        "Django"
      ]
    },
    {
      title: "Databases & Tools",
      description: "Working with databases and development tools",
      skills: [
        "SQL",
        "MySQL",
        "MongoDB",
        "Git",
        "GitHub",
        "Docker"
      ]
    },
    {
      title: "Data Analytics",
      description: "Exploring data and communicating insights",
      skills: [
        "Power BI",
        "Excel",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "SQL"
      ]
    },
    {
      title: "Data Science & AI",
      description: "Developing data-driven and intelligent solutions",
      skills: [
        "Machine Learning",
        "Deep Learning",
        "NLP",
        "PyTorch",
        "Scikit-learn",
        "Streamlit"
      ]
    }
  ];

  return (
    <section className="skills" id="skills">
      <div className="skills-container">

        <div className="skills-heading">
          <span className="section-subtitle">
            MY TECHNICAL EXPERTISE
          </span>

          <h2>Technical Skills</h2>

          <p>
            My technical toolkit across software development,
            data analytics and data science.
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category) => (
            <div className="skill-category" key={category.title}>

              <h3>{category.title}</h3>

              <p className="skill-category-description">
                {category.description}
              </p>

              <div className="skill-tags">
                {category.skills.map((skill) => (
                  <span className="skill-tag" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;
