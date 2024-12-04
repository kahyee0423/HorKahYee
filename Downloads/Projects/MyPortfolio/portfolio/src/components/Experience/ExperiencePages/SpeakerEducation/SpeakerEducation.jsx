import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import './SpeakerEducation.css';

const SpeakerEducation = () => {
  const navigate = useNavigate();
  const sliderRef = useRef();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const images = [
    `${process.env.PUBLIC_URL}/assets/SpeakerEducationPic/img-01.jpg`,
    `${process.env.PUBLIC_URL}/assets/SpeakerEducationPic/img-02.jpg`,
    `${process.env.PUBLIC_URL}/assets/SpeakerEducationPic/img-03.jpg`,
    `${process.env.PUBLIC_URL}/assets/SpeakerEducationPic/img-04.jpg`,
    `${process.env.PUBLIC_URL}/assets/SpeakerEducationPic/img-05.jpg`,
    `${process.env.PUBLIC_URL}/assets/SpeakerEducationPic/img-06.png`,
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
    <div className="speaker-page-wrapper">
    <section className="speaker-container">
      <div className="heading">
        <h1 className="fredoka-font">
          My Journey As a
          <span className="hidden-text-1"> Speaker </span> 
          for Education Sharing Workshop
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

      <div className="speaker-content">
        <h2>Unveiling Excellence: Key Takeaways and Professional Growth from My Speaking Role in the Education Sharing Session</h2>
        <div className="content-layout">
  <div className="image-grid">
    <img src={`${process.env.PUBLIC_URL}/assets/SpeakerEducationPic/img-10.png`} alt="" />
    <img src={`${process.env.PUBLIC_URL}/assets/SpeakerEducationPic/img-11.jpg`} alt="" />
  </div>
  <div className="text-content">
    <h3>Premier Intellectual and Professional Gains from My Engagement</h3>
    <p>Public Speaking</p>
    <p>Networking Opportunities</p>
    <p>Personal Growth</p>
    <p>Recognition and Achievements</p>
    <p>Learning Experience</p>
    <p>Motivation and Inspiration</p>
    <p>Teamwork Experience</p>
  </div>
  <div className="image-extra">
      <img src={`${process.env.PUBLIC_URL}/assets/SpeakerEducationPic/img-13.png`} alt="" />
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

export default SpeakerEducation;