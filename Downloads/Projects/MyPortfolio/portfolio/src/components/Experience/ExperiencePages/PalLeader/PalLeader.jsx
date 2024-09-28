import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './PalLeader.css'

const PalLeader = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="pal-leader-wrapper">
      <div className="heading-container">
        <h1>My Journey As a
          <span className="hidden-text"> Pal Leader </span> 
            at Perak Matriculation College
        </h1>
      </div>

      <div>

      </div>
      
      {/* Back to Home button */}
      <div class="button-container">
        <button className="button" onClick={() => navigate('/')}>Back To Home</button>
      </div>
    </div>
  );
};

export default PalLeader;