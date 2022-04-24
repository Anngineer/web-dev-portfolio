const Contact = () => {
  return (
    <section id="contact-section">
      <div className="contact-section-wrapper">
        <div className="contact-top contact-left"></div>
        <div className="contact-top contact-right"></div>
        <h2>Send me a note</h2>
        <p>if you would like to work together or discuss a project.</p>

        <div className="link-box">
          <a href={"mailto:anngineer@gmail.com"}>
            <i className="fas fa-envelope" alt="email icon"></i> Email
          </a>
          <a href={"https://github.com/Anngineer"}>
            <i className="fab fa-github" alt="GitHub icon"></i> GitHub
          </a>
          <a href={"https://www.linkedin.com/in/anngineer/"}>
            <i className="fab fa-linkedin" alt="Linked In Icon"></i> LinkedIn
          </a>
        </div>

        <div className="contact-bottom contact-right"></div>
        <div className="contact-bottom contact-left"></div>
      </div>
    </section>
  );
};
export default Contact;
