import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import './SpeakerEducation.css';
import AuroraGradientAnimated from '../../../AuroraGradientAnimated';

const SpeakerEducation = () => {
  const navigate = useNavigate();
  const sliderRef = useRef();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const images = [
    "assets/SpeakerEducationPic/img-01.jpg",
    "assets/SpeakerEducationPic/img-02.jpg",
    "assets/SpeakerEducationPic/img-03.jpg",
    "assets/SpeakerEducationPic/img-04.jpg",
    "assets/SpeakerEducationPic/img-05.jpg",
    "assets/SpeakerEducationPic/img-06.png",
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
      <AuroraGradientAnimated />
    <section className="speaker-container">
      <div className="heading">
        <h1>
          My Journey As a
          <span className="hidden-text"> Speaker </span> 
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
        <div class="content-layout">
  <div class="image-grid">
    <img src="/assets/SpeakerEducationPic/img-10.png" alt="" />
    <img src="/assets/SpeakerEducationPic/img-11.jpg" alt="" />
  </div>
  <div class="text-content">
    <h3>Premier Intellectual and Professional Gains from My Engagement</h3>
    <p>Public Speaking</p>
    <p>Networking Opportunities</p>
    <p>Personal Growth</p>
    <p>Recognition and Achievements</p>
    <p>Learning Experience</p>
    <p>Motivation and Inspiration</p>
    <p>Teamwork Experience</p>
  </div>
  <div class="image-extra">
      <img src="/assets/speakerEducationPic/img-13.png" alt="" />
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