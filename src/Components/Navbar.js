import React from 'react'
// import Logo from '../Logo.png'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container">
            <a className="navbar-brand text-white" href="#links">
                {/* <img className="logo" src={ Logo } alt="Logo" /> */}
                WEB DEVELOPER
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                {/* <FontAwesomeIcon icon="faBars" style={{ color: '#fff' }} /> */}
                <span className="navbar-toggler-icon" ></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#links">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#links">About Me</a>
                    </li>
                    {/* <li className="nav-item">
                        <a className="nav-link" href="#">Services</a>
                    </li> */}
                    <li className="nav-item">
                        <a className="nav-link" href="#links">Skills</a>
                    {/* <li className="nav-item">
                        <a className="nav-link" href="#">Experience</a>
                    </li> */}
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#links">Portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#links">Contact</a>
                    </li>
                </ul>
            </div>
            </div>
        </nav>
    )
}

export default Navbar;
