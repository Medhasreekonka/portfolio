
function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">

        <div className="contact-heading">
          <span className="section-subtitle">
            LET'S CONNECT
          </span>

          <h2>Get In Touch</h2>

          <p>
            I'm open to opportunities in Software Development,
            Data Analytics and Data Science. Feel free to reach
            out to discuss opportunities, collaborations or
            professional connections.
          </p>
        </div>

        <div className="contact-content">

          {/* Contact Information */}

          <div className="contact-info">
            <h3>Contact Information</h3>

            <p>
              I'm always interested in connecting with
              professionals, exploring new opportunities
              and discussing ideas. You can reach me through
              the following platforms.
            </p>

            <div className="contact-item">
              <span>Email</span>

              <a href="mailto:medhasree1704@gmail.com">
                medhasree1704@gmail.com
              </a>
            </div>

            <div className="contact-item">
              <span>LinkedIn</span>

              <a
                href="https://www.linkedin.com/in/k-medhasree-9629522b5/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Connect on LinkedIn ↗
              </a>
            </div>

            <div className="contact-item">
              <span>GitHub</span>

              <a
                href="https://github.com/Medhasreekonka"
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore GitHub Profile ↗
              </a>
            </div>
          </div>

          {/* Contact Form */}

          <div className="contact-form">
            <h3>Send Me a Message</h3>

            <form
              action="https://formsubmit.co/medhasree1704@gmail.com"
              method="POST"
            >
              <input
                type="hidden"
                name="_subject"
                value="New Portfolio Contact Message"
              />

              <input
                type="hidden"
                name="_captcha"
                value="true"
              />

              <label htmlFor="name">Your Name</label>

              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                autoComplete="name"
                required
              />

              <label htmlFor="email">Your Email</label>

              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                autoComplete="email"
                required
              />

              <label htmlFor="message">Your Message</label>

              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Write your message..."
                required
              />

              <button type="submit">
                Send Message →
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;
