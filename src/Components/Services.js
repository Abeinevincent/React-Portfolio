import React from 'react';

function Services() {
    return (
        <div>
            <section className="services" id="services">
            <div className="max-width">
                <h2 className="title">
                    My services
                </h2>
                <div className="serv-content">
                    <div className="card">
                        <div className="box">
                            <i className="fa fa-code"></i>
                            <div className="text">
                                Web Design
                            </div>
                            <p>
                                Having built very many websites on the web, I have experience in web development 
                                using HTML, CSS, Jquery,JavaScript, React.JS, Node.JS and PHP. 
                                I have gotten alot more experience through  using the same languages building 
                                many real life projects by turning ideas into products.
                            </p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="box">
                            <i className="fa fa-mobile"></i>
                            <div className="text">
                                Apps Design
                            </div>
                            <p>
                                After many years of building websites and optimising them, I decided to dive into
                                mobile apps design in addition to web design using React and React Native, simulteneously taking advantage 
                                of JavaScript in the field of app development as a programming language 
                                for building cross-platform apps.
                            </p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="box">
                            <i className="fa fa-angle-up"></i>
                            <div className="text">
                                Graphics Designing
                            </div>
                            <p>
                                In addition to web and mobile app design, I also do graphics designing, photo editing and User Interface(UI) designing which helps me in proper design of graphics, 
                                appropriate editing of photos and User Interfaces for the  websites that I build.
                                This has helped me to build self-sustainable applications.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
        </div>
    )
}

export default Services;
