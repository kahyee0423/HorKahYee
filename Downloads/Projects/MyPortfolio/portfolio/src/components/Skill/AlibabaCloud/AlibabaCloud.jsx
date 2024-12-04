import React, { useEffect, useRef, useState } from 'react';
import './AlibabaCloud.css';
import AuroraGradientAnimated from '../../AuroraGradientAnimated';
import { useNavigate } from 'react-router-dom';
import { ALIBABA_CERT, ALIBABA_SPECIALTY_CERT } from '../../../utils/data.js';
import HangingImage from '../../HangingImage/HangingImage.jsx';

const AlibabaCloud = () => {
  const navigate = useNavigate();
  const sectionRef = useRef(null); 
  const certItemsRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target); 
                }
            });
        }, { threshold: 0.5 }); 

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect(); 
    }, []);

    useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.classList.add('visible');
                  observer.unobserve(entry.target); 
              }
          });
      }, { threshold: 0.3 }); 

      certItemsRef.current.forEach(item => {
          if (item) observer.observe(item);
      });

      return () => observer.disconnect(); 
  }, []);

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

        <div className="associate-cert">
          <h4>Alibaba Cloud Certified Associate</h4>
          <HangingImage
              src={`${process.env.PUBLIC_URL}/assets/AlibabaCloudPic/ACA.png`} 
              alt="ACA pic"
          />
          <div className="desc">
              <p>Credential ID: IACA01241000159425L</p>
              <p>Valid Till: Oct 2026</p>
          </div>
      </div>
      
        <h3 className="spec-head">Specialty Certification</h3>
        <div className="specialty-cert" ref={sectionRef}>
            {ALIBABA_SPECIALTY_CERT.map((cert, index) => (
              <div key={index} className="cert-img">
                  <img src={cert.image} alt={`Specialty Certification ${index + 1}`} />
                    <p>Certification Code: {cert.code}</p>
                    <p>Expires: {cert.expire}</p>
              </div>
            ))}
        </div>

        <h3 className="miscellaneous-cert">Miscellaneous Certification</h3>
        <div className="alibaba-cert-content">
          {ALIBABA_CERT.map((cert, index) => (
            <div
              key={index}
              className="cert-image-1-container"
              ref={el => certItemsRef.current[index] = el}
              onMouseEnter={() => setHoveredImage(index)} 
              onMouseLeave={() => setHoveredImage(null)}  
            >
              <img
                src={hoveredImage === index ? cert.image2 : cert.image1}  
                alt={`Certification ${index + 1}`}
                className={`cert-image-1 ${hoveredImage === index ? 'image2' : 'image1'}`} 
              />
              <p>Certification Code: {cert.code}</p>
              <p>Expires: {cert.expire}</p>
            </div>
          ))}
        </div>

        <div className="button-container">
          <button className="button" onClick={() => navigate('/')}>Back To Home</button>
        </div>
      </section>
    </div>
  );
};

export default AlibabaCloud;