
function Internship() {
  const technologies = [
    "Python",
    "SQL",
    "Power BI",
    "Machine Learning",
    "Deep Learning",
    "Streamlit"
  ];

  return (
    <section className="internship" id="internship">
      <div className="internship-container">

        <div className="internship-heading">
          <span className="section-subtitle">
            INDUSTRY EXPERIENCE
          </span>

          <h2>Internship Experience</h2>

          <p>
            Practical exposure to data science, analytics
            and machine learning workflows.
          </p>
        </div>

        <div className="internship-card">

          <div className="internship-header">
            <div>
              <h3>Data Science Intern</h3>
              <h4>Take It Smart</h4>

              <p className="internship-location">
                Bengaluru, India
              </p>
            </div>

            <span className="internship-duration">
              2 Months
            </span>
          </div>

          <div className="internship-details">

            <h4>About the Internship</h4>

            <p>
              Completed a Data Science internship focused
              on developing practical knowledge of data
              analysis, visualization and machine learning.
              Gained exposure to working with datasets,
              extracting insights and exploring data-driven
              solutions using different technologies.
            </p>

            <h4>Key Areas of Experience</h4>

            <ul>
              <li>
                Python programming, data manipulation
                and exploratory data analysis.
              </li>

              <li>
                SQL queries for data retrieval and
                database management.
              </li>

              <li>
                Data visualization, dashboard development
                and reporting using Power BI.
              </li>

              <li>
                Fundamentals of Machine Learning and
                Deep Learning techniques.
              </li>

              <li>
                Building interactive applications and
                exploring deployment using Streamlit.
              </li>
            </ul>

          </div>

          <div className="internship-technologies">
            {technologies.map((technology) => (
              <span key={technology}>
                {technology}
              </span>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default Internship;
