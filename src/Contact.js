const Contact = () => {
  return (
    <section id="contact-section">
      <div className="contact-section-wrapper">
        <div className="contact-top contact-left"></div>
        <div className="contact-top contact-right"></div>
        <h2>Stay Updated</h2>
        <p>Follow my latest projects and professional journey.</p>

        <div className="link-box">
          
          <a href={"https://github.com/Anngineer"}>
            <i className="fab fa-github" alt="GitHub icon"></i> GitHub
          </a>
          <a href={"https://www.linkedin.com/in/anngineer/"}>
            <i className="fab fa-linkedin" alt="Linked In Icon"></i> LinkedIn
          </a>
          <a href={"https://anngineer.substack.com/"}>
            <i className="fas fa-blog" alt="blog icon"></i> Blog
          </a>
        </div>

        <div className="contact-bottom contact-right"></div>
        <div className="contact-bottom contact-left"></div>
      </div>
    </section>
  );
};
export default Contact;
