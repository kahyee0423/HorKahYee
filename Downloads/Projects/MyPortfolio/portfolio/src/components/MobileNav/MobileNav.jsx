import React from 'react';
import './MobileNav.css';
import { HashLink as Link } from 'react-router-hash-link';
import { useNavigate } from 'react-router-dom';

const MobileNav = ({ isOpen, toggleMenu}) => {

  const navigate = useNavigate();
  const goToProfile = () => {
    navigate('/profile'); 
};

  return(
  <>
    <div 
        className={`mobile-menu ${isOpen ? "active" : ""}`} 
        onClick={toggleMenu}
    >

        <div className="mobile-menu-container">
            <img className='logo' src={`${process.env.PUBLIC_URL}/assets/generalPic/Name.png`} alt=""/>

            <ul>
                <li>
                <Link smooth to="#home-section" className="menu-item-1">Home</Link>
                </li>

                <li>
                <Link smooth to="#skills-section" className="menu-item-1">Skills</Link>
                </li>

                <li>
                <Link smooth to="#experience-section" className="menu-item-1">Experience</Link>
                </li>

                <li>
                <Link smooth to="#contact-section" className="menu-item-1">Contact Me</Link>
                </li>

                <button className="profile-btn-1" onClick={goToProfile}>View Profile</button>
            </ul>
        </div>
    </div>
    </>
  );
};


export default MobileNav;