import React from 'react';

function Contact() {
    return (
        <div style={{backgroundColor: '#eee'}}>
        <section className="contact" id="contact">
            <div className="max-width">
                <h2 className="title" style={{marginTop: '20px'}}>Contact me</h2>
                <div className="contact-content">

                    <div className="column left" style={{marginTop: '50px', marginLeft: '30px'}}>
                        <div className="text">Get in Touch</div>
                        <p>
                            You can best contact me direct on any of my phone numbers, using my email,
                            or send me a message <br /> using the contact form on the right.
                        </p>
                        <div className="icons">
                            <div className="row">
                                <i className="fa fa-user"></i>
                                <div className="info">
                                    <div className="head">Name</div>
                                    <div className="sub-title">Abeinemukama Vicent</div>
                                </div>
                            </div>
                            <div className="row">
                                <i className="fa fa-map-marker"></i>
                                <div className="info">
                                    <div className="head">Address</div>
                                    <div className="sub-title">Mbarara, Uganda</div>
                                </div>
                            </div>
                            <div className="row">
                                <i className="fa fa-envelope"></i>
                                <div className="info">
                                    <div className="head">Email</div>
                                    <div className="sub-title"><a href="mailto:abeinevincent@gmail.com">abeinevincent@gmail.com</a></div>
                                </div>
                            </div>
                            <div className="row">
                                <i className="fa fa-phone"></i>
                                <div className="info">
                                    <div className="head">Phone Number</div>
                                    <div className="sub-title"><a href="tel:+256779923503">+256779923503</a>/ <a href="tel:+256701726618">+256701728618</a></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="column right" style={{marginTop: '-60px', marginRight: '30px'}}>
                        <div className="text" style={{paddingTop: '20px'}}>Message me</div>
                        <form action="#">
                            <div className="fields">
                                <div className="field name">
                                    <input type="text" placeholder="Name" required />
                                </div>
                                <div className="field email">
                                    <input type="email" placeholder="Email" required />
                                </div>
                            </div>
                            <div className="field">
                                <input type="text" placeholder="Subject" required />
                            </div>
                            <div className="field textarea">
                                <textarea cols="30" rows="10" placeholder="Message.." style={{height: '120px'}} required></textarea>
                            </div>
                            <div className="button">
                                <button type="submit" style={{marginTop: '45px'}}>Send message</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </section>
        </div>
    )
}

export default Contact;
