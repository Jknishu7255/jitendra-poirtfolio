import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My projects <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Basic Web Page Project</h4>
                <h5>HTML & CSS</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Developed a responsive webpage using HTML and CSS. Learned the core structure of web development and implemented UI basics for a static page.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>C Programming Mini Projects</h4>
                <h5>C/C++</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Created small programs like calculator, palindrome checker, and other utilities. Improved logic building and problem-solving skills through hands-on practice.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
