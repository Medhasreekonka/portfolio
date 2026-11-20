
function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <span className="hero-greeting">
          HELLO, I'M K MEDHASREE
        </span>

        <h1>
          Software Developer
          <span className="hero-highlight">.</span>
        </h1>

        <h2>
          Data Science Graduate | Developer
        </h2>

        <p>
          I’m a Data Science graduate interested in
          building practical software applications
          and intelligent solutions. I enjoy working
          across frontend development, backend
          technologies and machine learning.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn-primary">
            Explore My Projects →
          </a>

          <a
            href="/resume.pdf"
            className="btn-outline"
            download
          >
            Download Resume ↓
          </a>
        </div>
      </div>

      <div className="hero-image">
        <img
          src="/profile.jpg"
          alt="Medha - Software Developer"
          className="profile-photo"
        />
      </div>
    </section>
  );
}

export default Hero;
