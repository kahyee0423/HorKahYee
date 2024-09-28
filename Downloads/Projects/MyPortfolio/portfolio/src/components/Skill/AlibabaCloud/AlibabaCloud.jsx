import React, { useEffect, useState } from 'react';
import './AlibabaCloud.css';
import AuroraGradientAnimated from '../../AuroraGradientAnimated';
import { useNavigate } from 'react-router-dom';
import { ALIBABA_CERT } from '../../../utils/data.js';

const AlibabaCloud = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [hoveredImage, setHoveredImage] = useState(null);

  return (
    <div className="alibaba-wrapper">
      <AuroraGradientAnimated />
      <section className="alibaba-cloud-cert-container">
        <div className="alibaba-cert-heading">
          <h2>Certified Expertise in Alibaba Cloud Technologies</h2>
        </div>

        <div className="alibaba-cert-content">
          {ALIBABA_CERT.map((cert, index) => (
            <div
              key={index}
              className="cert-image-container"
              onMouseEnter={() => setHoveredImage(index)} 
              onMouseLeave={() => setHoveredImage(null)}  
            >
              <img
                src={hoveredImage === index ? cert.image2 : cert.image1}  
                alt={`Certification ${index + 1}`}
                className={`cert-image ${hoveredImage === index ? 'image2' : 'image1'}`} 
              />
              <p>Certification Code: {cert.code}</p>
              <p>Expires: {cert.expire}</p>
            </div>
          ))}
        </div>

        {/* Back to Home button */}
        <div className="button-container">
          <button className="button" onClick={() => navigate('/')}>Back To Home</button>
        </div>
      </section>
    </div>
  );
};

export default AlibabaCloud;
