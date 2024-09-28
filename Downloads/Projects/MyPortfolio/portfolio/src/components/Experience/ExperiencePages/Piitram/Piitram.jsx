import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import './Piitram.css';

const Piitram = () => {
  const navigate = useNavigate();
  const sliderRef = useRef();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const images = [
    "/assets/piitramPic/img-01.jpg",
    "/assets/piitramPic/group.jpg",
    "/assets/piitramPic/img-09.jpg",
    "/assets/piitramPic/img-04.jpg",
    "/assets/piitramPic/img-05.jpg",
    "/assets/piitramPic/img-02.jpg",
    "/assets/piitramPic/img-06.jpg",
    "/assets/piitramPic/img-08.jpg",
    "/assets/piitramPic/img-15.jpg",
    "/assets/piitramPic/img-17.jpg",
    "/assets/piitramPic/upm_cert.jpg",
    "/assets/piitramPic/award-badge.jpg",
    "/assets/piitramPic/kmpk-cert.jpg"
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const slideRight = () => {
    sliderRef.current.slickNext();
  };

  const slideLeft = () => {
    sliderRef.current.slickPrev();
  };

  return (
  <div className="piitram-wrapper">
    <section className="piitram-container">
      <div className="heading-container">
        <h1>
          My Journey As a
          <span className="hidden-text"> Participant </span> 
          for PIITRAM 2023
        </h1>
      </div>

      <div className="slider-container">
        <div className="arrow-left-2" onClick={slideLeft}>
          <span className="material-symbol-outlined">&lt;</span>
        </div>

        <Slider ref={sliderRef} {...settings}>
          {images.map((image, index) => (
            <div key={index} className="slider-slide">
              <img src={image} alt={`Slide ${index}`} className="slider-image" />
            </div>
          ))}
        </Slider>

        <div className="arrow-right-2" onClick={slideRight}>
          <span className="material-symbol-outlined">&gt;</span>
        </div>
      </div>

      <div className="main-content">
          <div className="honours">
              <img src="/assets/piitramPic/myipo-cert.jpg" alt="cert" />
              <img src="/assets/piitramPic/upm_cert.jpg" alt="cert" />
              <img src="/assets/piitramPic/kmpk-cert.jpg" alt="cert" />
              <img src="/assets/piitramPic/medal.png" alt="" />
          </div>

          <div className="honours-text">
            <h2>Premier Intellectual and Professional Gains from My Engagement</h2>
            <ul>
              <p>&#10003; Skills Development</p>
              <p>&#10003; Networking Opportunities</p>
              <p>&#10003; Personal Growth</p>
              <p>&#10003; Recognition and Achievements</p>
              <p>&#10003; Learning Experience</p>
              <p>&#10003; Motivation and Inspiration</p>
              <p>&#10003; Teamwork Experience</p>
              <p>&#10003; Creativity</p>
              <p>&#10003; Exposure to Best Practices</p>
            </ul>

            <div className="cite-container">
              <h4>HONOURS AND ACHIEVEMENT</h4>
                  <p><img src="/assets/piitramPic/icon.png" alt="" />Silver Medal</p>
                  <p><img src="/assets/piitramPic/star.png" alt="" />Certified by MYIPO with the Certification No: CRLY2023W00396</p>
                  <p><img src="/assets/piitramPic/ppl.png" alt="" />Innovation Award</p>
            </div>
          </div>
      </div>

      <div className="button-container">
        <button className="button" onClick={() => navigate('/')}>Back To Home</button>
      </div>
    </section>
    </div>
  );
};

export default Piitram;


