import React from 'react'
import Typed from 'react-typed';

const Header = () => {
    return (
        <div className="header-wrapper" id="header">
            <div className="main-info">
                <h1>Web Development and Website Promotions</h1>
                <Typed 
                    className="typed-text"
                    strings={['Web Design', 'Web Development', 'Facebook ADS', 'Google ADS']}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <a href="#links" className="btn-main-offer">Hire Me</a>
            </div>
        </div>
    )
}

export default Header;
