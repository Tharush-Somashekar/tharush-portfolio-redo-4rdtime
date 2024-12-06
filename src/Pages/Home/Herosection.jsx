export default function Herosection () {
    return(
        <section id="herosection" className="hero-section">
            <div className="hero-section-content-container">
                <div className="hero--section--content">
                    <h1>
                        <p assName="section--title">Hey! I am tharush Somashekar</p>
                        <span className="hero--section-title--color">User Experience</span>{" "}
                    <br />
                    Designer
                    </h1>
                    <p className="hero--section-description">
                        Change this in the Herosection.jsx file
                    <br />
                    this too dude
                    </p>
                </div>
                <button className="btn btn-primary">Get in touch</button> {''}<button className="btn btn-primary">Get my resume</button>    
            </div>
            <div className="hero--section--btn">
                <img src='../../../public/img/Tharush_logo.png' alt='Tharush pic' />
            </div>
        </section>
    )
    
}