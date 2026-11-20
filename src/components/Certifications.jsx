
function Certifications() {
  const certifications = [
    {
      title: "Certification Name",
      provider: "Issuing Organization",
      year: "2025",
      category: "Technical"
    },
    {
      title: "Course or Training Name",
      provider: "Issuing Organization",
      year: "2025",
      category: "Professional Development"
    }
  ];

  return (
    <section className="certifications" id="certifications">
      <div className="certifications-container">

        <div className="certifications-heading">
          <span className="section-subtitle">
            CONTINUOUS LEARNING
          </span>
          <h2>Certifications & Achievements</h2>
          <p>
            Certifications, courses and milestones from my learning journey.
          </p>
        </div>

        <div className="certifications-grid">
          {certifications.map((item, index) => (
            <div className="certification-card" key={index}>
              <span className="certification-category">
                {item.category}
              </span>

              <h3>{item.title}</h3>
              <p>{item.provider}</p>

              <div className="certification-footer">
                <span>{item.year}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Certifications;
