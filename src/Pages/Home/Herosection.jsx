export default function Herosection () {
    return(
        <section id="herosection" className="hero--section">
            <div className="hero-section-content-container">
                <div className="  .hero--section--content">
                    <h1>
                        <p assName="section--title">Hey! I am Tharush Somashekar</p>
                        <span className="hero--section-title--color">User Experience Designer</span>{" "}
                    <br />
                    
                    </h1>
                    <p className="hero--section-description">
                        Change this in the Herosection.jsx file
                    <br />
                    this too dude
                    </p>
                </div>
                <div id="herosectionbtn" className="hero--section--btn-containet">
                <button className="btn btn-primary">Get in touch</button> {'   '}{'   '}{'   '}
                <button className="btn btn-primary">Get my resume</button>
                </div>  
            </div>
            <div className="hero--section--img">
                <img src='../../../public/img/hero_img.png' alt='Tharush' />
            </div>
        </section>
    )
    
}