import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './CoreTeamGDSC.css';

const CoreTeamGDSC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="core-team-container">
      <div className="heading-container">
        <h1 className="boogaloo-regular">
          My Journey As An
          <span className="hidden-text"> EPCD Member </span>
          of GDSC USM
        </h1>
      </div>

        <div className="image-quote-wrapper">
          <img src={`${process.env.PUBLIC_URL}/assets/CoreTeamGDSCPic/img-04.png`} alt="intro pic" className="reveal-image" />
          <div className="text-container">
            <p className="initial-text">Meet Kah Yee</p>
            <blockquote className="reveal-text">
              <p className="quote-text">"She is here with a voracious hunger to explore the arena by the adage 'Less is More'.
              Be that as it may, Kah Yee is more passionate about revealing eras and community development in her unique way. Truth be told, it is irrevocably her urge to discover
              how her abilities can revolutionize the planet."</p>
              <footer>- Kah Yee, EPCD Member at GDSC USM</footer>
            </blockquote>
          </div>
        </div>

        <div className="onboarding-sec">
          <div className="image-container-1">
            <img src={`${process.env.PUBLIC_URL}/assets/CoreTeamGDSCPic/img-01.png`} alt="" />
            <img src={`${process.env.PUBLIC_URL}/assets/CoreTeamGDSCPic/img-02.png`} alt="" />
          </div>
          <div className="content">
            <h3>"The Genesis of My Journey:</h3>
              <h3>GDSC USM Onboarding Session 23/24"</h3>
            <p>Where the story begins...</p>
          </div>
        </div>

        <div className="event-hosted">
          <div className="written-text">
            <h3>"Commanding the Stage:</h3>
            <h3>My Debut as Workshop Emcee"</h3>
            <p>My debut as a workshop emcee was a thrilling challenge, refining my skills in audience engagement and event management.</p>
            <h5>From Design to Interaction: Figma Prototyping Workshop</h5>
          </div>
          <div className="emcee-photo">
            <img src={`${process.env.PUBLIC_URL}/assets/CoreTeamGDSCPic/img-03.jpg`} alt="" />
          </div>
        </div>
        
        <div className="cert-2324">
          <div className="cert-2324-photo">
            <img src={`${process.env.PUBLIC_URL}/assets/CoreTeamGDSCPic/gdsc-cert.jpg`} alt="" />
          </div>
          <div className="written-text">
            <h3>"From Commitment to Certification:</h3>
            <h3>Core Team Member at EPCD GDSC USM 23/24"</h3>
            <p>Achieving Core Team Member certification at EPCD GDSC USM 23/24 underscores my dedication and teamwork.</p>
          </div>
          
        </div>
  
      <div className="button-container">
        <button className="button" onClick={() => navigate('/')}>
          Back To Home
        </button>
      </div>
    </div>
  );
};

export default CoreTeamGDSC;
