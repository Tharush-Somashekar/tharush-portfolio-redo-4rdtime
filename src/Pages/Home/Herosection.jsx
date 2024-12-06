export default function HeroSection() {
    return (
      <section id="heroSection" className="hero--section">
        <div className="hero--section--content--box">
          <div className="hero--section--content">
            <p className="section--title">Hello!</p>
            <h1 className="hero--section--title">
              <span className="hero--section-title--color">I am</span>{" "}
              <br />
              Tharush Somashekar
            </h1>
            <p className="hero--section-description">
              A passionate and curious user experience researcher and designer with empaphasis on research, simplicity and empathy.
            </p>
          </div>
          <div className="hero--section--btn-containet" >
          <button className="btn btn-primary">Get In Touch</button>{'    '}
          <button className="btn btn-primary">Download Resume</button>
          </div>
        </div>
        <div className="hero--section--img">
          <img src="./img/hero_img.png" alt="Hero Section" />
        </div>
      </section>
    );
  }