import React, { useState, useEffect } from 'react';
import './App.css';
import NavBar from './components/NavBar.jsx';
import Hero from './components/Hero/Hero.jsx';
import Skills from './components/Skill/Skills.jsx';
import Experience from './components/Experience/Experience.jsx';
import ContactMe from './components/ContactMe/ContactMe.jsx';
import Footer from './components/Footer/Footer.jsx';
import CoreTeamGDSC from './components/Experience/ExperiencePages/CoreTeamGDSC/CoreTeamGDSC.jsx';
import PalLeader from './components/Experience/ExperiencePages/PalLeader/PalLeader.jsx';
import Piitram from './components/Experience/ExperiencePages/Piitram/Piitram.jsx';
import SpeakerEducationWorkshop from './components/Experience/ExperiencePages/SpeakerEducation/SpeakerEducation.jsx';
import Profile from './components/Profile/Profile.jsx';
import AlibabaCloud from './components/Skill/AlibabaCloud/AlibabaCloud.jsx';
import GCCert from './components/googleCloudCert/GCCert.jsx';
import { HashRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

const App = () => {
  const [showSplash, setShowSplash] = useState(true);
  const location = useLocation();
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const sectionIdMap = {
      '/': 'home-section',
      '/skills-section': 'skills-section',
      '/core-team-gdsc': 'home-section',
      '/pal-leader-biology': 'home-section',
      '/piitram2023': 'home-section',
      '/speaker-education-sharing-workshop': 'home-section',
      '/profile': 'home-section',
    };
    
    const sectionId = sectionIdMap[location.pathname];
    if (sectionId) {
      scrollToSection(sectionId);
    }
  }, [location.pathname]);

  const hideNavBarPaths = [
    '/core-team-gdsc',
    '/speaker-education-sharing-workshop',
    '/pal-leader-biology',
    '/piitram2023',
    '/profile',
    '/AlibabaCloud',
    '/GCCert'
  ];

  return (
    <>
      {showSplash ? (
      <div className="splash-screen">
        <h2 className="arsenal-sc-regular">Immerse yourself in Kah Yee's portfolio</h2>
        <h2 className="arsenal-sc-bold">A showcase of sophisticated achievements and visionary craftsmanship</h2>
        
          <div className="loop-wrapper">
            <div className="mountain"></div>
            <div className="hill"></div>
            <div className="tree"></div>
            <div className="tree"></div>
            <div className="tree"></div>
            <div className="rock"></div>
            <div className="truck"></div>
            <div className="wheels"></div>
          </div> 
      </div>
      ) : (
        <>
          {!hideNavBarPaths.includes(location.pathname) && <NavBar />}
          <Routes>
            <Route path="/" element={
              <>
                <section id="home-section">
                  <Hero />
                </section>
                <section id="skills-section">
                  <Skills />
                </section>
                <section id="experience-section">
                  <Experience />
                </section>
                <section id="contact-section">
                  <ContactMe />
                </section>
                <Footer />
              </>
            } />
            <Route path="/core-team-gdsc" element={<CoreTeamGDSC />} />
            <Route path="/pal-leader-biology" element={<PalLeader />} />
            <Route path="/piitram2023" element={<Piitram />} />
            <Route path="/speaker-education-sharing-workshop" element={<SpeakerEducationWorkshop />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/AlibabaCloud" element={<AlibabaCloud />} />
            <Route path="/GCCert" element={<GCCert />} />
          </Routes>
        </>
      )}
    </>
  );
};

const MainApp = () => (
  <Router>
    <App />
  </Router>
);

export default MainApp;