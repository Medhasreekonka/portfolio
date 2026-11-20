
function Education() {
  const education = [
    {
      degree: "Bachelor of Engineering",
      specialization: "Data Science",
      college: "RYM Engineering College",
      duration: "2022 – 2026",
      cgpa: "9.09",
      status: "Graduated"
    }
  ];

  return (
    <section className="education" id="education">
      <div className="education-container">

        <div className="education-heading">
          <span className="section-subtitle">
            ACADEMIC BACKGROUND
          </span>

          <h2>Education</h2>

          <p>
            My academic foundation in Data Science
            and Engineering.
          </p>
        </div>

        <div className="education-timeline">
          {education.map((item) => (
            <div
              className="education-card"
              key={`${item.degree}-${item.specialization}`}
            >

              <div className="education-marker"></div>

              <div className="education-card-header">
                <span className="education-duration">
                  {item.duration}
                </span>

                <span className="education-status">
                  {item.status}
                </span>
              </div>

              <h3>{item.degree}</h3>

              <h4>{item.specialization}</h4>

              <p className="education-college">
                {item.college}
              </p>

              <div className="education-result">
                <span>Academic Performance</span>

                <strong>
                  {item.cgpa} CGPA
                </strong>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Education;
