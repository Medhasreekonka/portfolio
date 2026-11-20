function About() {
  const highlights = [
    {
      title: "Education",
      value: "B.E. Data Science",
      description: "Engineering graduate"
    },
    {
      title: "Software Development",
      value: "Full Stack",
      description: "Building web applications"
    },
    {
      title: "Data Analytics",
      value: "Data Insights",
      description: "SQL, Python and Power BI"
    },
    {
      title: "Data Science",
      value: "AI & Machine Learning",
      description: "Exploring intelligent solutions"
    }
  ];

  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-heading">
          <span className="section-subtitle">
            GET TO KNOW ME
          </span>
          <h2>About Me</h2>
        </div>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a Data Science graduate with an interest in Software Development, Data Analytics and Data Science. 
              I enjoy building practical applications, working with data and exploring intelligent solutions to real-world problems.
            </p>
            <p>
              I have hands-on experience with technologies such as Java, Python, React, Django, SQL and Power BI,
               along with exposure to Machine Learning and Deep Learning concepts.
            </p>
            <p>
              Through academic projects and internship experience, I've developed skills in application development, data analysis, 
              data visualization and machine learning. I'm eager to apply my knowledge, learn new technologies and contribute to meaningful projects across these domains.
            </p>
          </div>

          <div className="about-highlights">
            {highlights.map((item) => (
              <div className="highlight-card" key={item.title}>
                <span>{item.title}</span>
                <h3>{item.value}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;