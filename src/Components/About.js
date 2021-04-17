import React from 'react';
import Typed from 'react-typed';
import Profile from '../Profile.jpg';

function About() {
    return (
        <section className="about" id="about">
            <div className="max-width">
                <h2 className="title text-warning">
                    About Me
                </h2>
                <div className="about-content">
                    <div className="column left">
                        <img src={ Profile } alt="" className="image-fluid" />
                    </div>
                    <div className="column right">
                        <div className="text">
                            I'm Vicent and I'm a 
                            <Typed
                                className="typed-text"
                                strings={["Front-end Developer", "Designer", "Photo Editor", "Freelancer"]}
                                typeSpeed={40}
                                backSpeed={60}
                                loop
                            />
                        </div>
                        <p>
                            I am an experienced front-end web developer with many years of working experience writing clean code. 
                            I have experience in HTML, CSS, Bootsrap, vanilla JavaScript, ES6, React.JS, React Native, Jquery, Node.JS and PHP.
                            In addition, I also do graphics designing, User Interface designing and photo editing, and like 
                            working in teams sharing progress via github, as well as working as a team lead.
                        </p>
                        <a href="#link" className="d-cv">Download CV</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;
