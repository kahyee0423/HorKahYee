import React, { useState, useEffect } from 'react'; 
import { HashLink as Link } from 'react-router-hash-link';
import './NavBar.css';
import MobileNav from './MobileNav/MobileNav.jsx';

const NavBar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const [visible, setVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };

    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        setVisible(lastScrollY > currentScrollY || currentScrollY < 10);
        setLastScrollY(currentScrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
      
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, [handleScroll]);

    return (
        <>
            <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />

            <nav 
                className="nav-wrapper" 
                style={{ transform: visible ? 'translateY(0)' : 'translateY(-100%)' }}
            >
                <div className="nav-content">
                    <img className="logo" src={`${process.env.PUBLIC_URL}/assets/generalPic/Name2.png`} alt="" />

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

                    <button className="menu-btn" onClick={toggleMenu}>
                        <span className={"material-symbols-outlined"} style={{ fontSize: "1.8rem" }}>
                            {openMenu ? "close" : "menu"}
                        </span>
                    </button>
                </div>
            </nav>

            <div 
                className="nav-hover-area" 
                onMouseEnter={() => setVisible(true)} 
                onMouseLeave={() => setVisible(false)}
            />
        </>
    );
};

export default NavBar;