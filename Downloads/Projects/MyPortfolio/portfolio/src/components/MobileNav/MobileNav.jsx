import React from 'react';
import './MobileNav.css';
import { HashLink as Link } from 'react-router-hash-link';

const MobileNav = ({ isOpen, toggleMenu}) => {
  return(
  <>
    <div 
        className={`mobile-menu ${isOpen ? "active" : ""}`} 
        onClick={toggleMenu}
    >

        <div className="mobile-menu-container">
            <img className='logo' src="./assets/generalPic/Name.png" alt=""/>

            <ul>
                <li>
                <Link smooth to="#home-section" className="menu-item">Home</Link>
                </li>

                <li>
                <Link smooth to="#skills-section" className="menu-item">Skills</Link>
                </li>

                <li>
                <Link smooth to="#experience-section" className="menu-item">Experience</Link>
                </li>

                <li>
                <Link smooth to="#contact-section" className="menu-item">Contact Me</Link>
                </li>
            </ul>
        </div>
    </div>
    </>
  );
};


export default MobileNav;