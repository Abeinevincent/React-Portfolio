import React from 'react';

function Skills() {
    return (
        <div>
            <section className="skills" id="skills">
            <div className="max-width">
                <h2 className="title">My skills</h2>
                <div className="skills-content">
                    <div className="column left">
                        <div className="text">
                            My creative skills & experiences.
                        </div>
                        <p>I have skills and experience in web development, mobile app development, graphics designing, User Interface designing, photo editing and git controls. 
                           Also I have excellent communication skills using English, creativity and problem solving using available resources.</p>
                        <a href="#about">Read more</a>
                    </div>
                <div className="column right">
                    <div className="bars">
                        <div className="info">
                            <span>HTML</span>
                            <span>98%</span>
                        </div>
                        <div className="line html"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>CSS</span>
                            <span>98%</span>
                        </div>
                        <div className="line css"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>Bootstrap</span>
                            <span>98%</span>
                        </div>
                        <div className="line bootstrap"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>Designing</span>
                            <span>98%</span>
                        </div>
                        <div className="line design"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>JavaScript</span>
                            <span>90%</span>
                        </div>
                        <div className="line js"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>React</span>
                            <span>75%</span>
                        </div>
                        <div className="line react"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>Jquery</span>
                            <span>70%</span>
                        </div>
                        <div className="line Jquery"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>PHP</span>
                            <span>70%</span>
                        </div>
                        <div className="line php"></div>
                    </div>

                </div>
            </div>
            </div>
        </section>
        </div>
    )
}

export default Skills;
