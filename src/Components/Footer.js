import React from 'react';

function Footer() {
    return (
        <div>
            <footer id="footer">
                <div className="footer-top">
                    <div className="container mt-3">
                        <div className="row">
                            <div className="col-lg-12 col-md-8">
                                <div className="footer-info">
                                    <h2>Connect with me</h2>
                                    <div className="social-links mt-3">
                                    <a target="_bank" href="https://twitter.com/AbeineV" className="twitter text-white cfi mx-2"><i className="fa fa-twitter"></i></a>
                                    <a target="_bank" href="https://m.facebook.com/abeine.vincent" className="facebook text-white cfi mx-2"><i className="fa fa-facebook"></i></a>
                                    <a target="_bank" href="https://www.instagram.com/abeinevincent/" className="instagram text-white cfi mx-2"><i className="fa fa-instagram"></i></a>
                                    <a target="_bank" href="https://github.com/Abeinevincent" className="github text-white cfi mx-2"><i className="fa fa-github"></i></a>
                                    <a target="_bank" href="https://www.linkedin.com/mwlite/in/abeinemukama-vicent-b17444187" className="linkedin text-white cfi mx-2"><i className="fa fa-linkedin"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <hr className="mb-4 mt-1 hr1" style={{width: '100%', justifyContent: 'center', textAlign: 'center'}} />
                </div>

                 {/* Footer copyright  */}
                <div className="container">
                    <div className="copyright" style={{textAlign: 'center'}}>
                        Copyright  &copy; 2021<strong><span> Vincent</span></strong>. All Rights Reserved
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer;
