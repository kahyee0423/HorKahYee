import React, { useRef, useState, useEffect } from 'react';
import './Experience.css';
import ExperienceCard from './ExperienceCard/ExperienceCard';
import { EXPERIENCE } from '../../utils/data';
import Slider from 'react-slick/lib/slider';
import { Link } from 'react-router-dom';

const Experience = () => {
  const sliderRef = useRef();
  const experienceRef = useRef();
  const [isVisible, setIsVisible] = useState(false);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
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

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing after becoming visible
        }
      });
    });

    // Store the current ref value in a local variable
    const currentExperienceRef = experienceRef.current;

    if (currentExperienceRef) {
      observer.observe(currentExperienceRef);
    }

    return () => {
      if (currentExperienceRef) {
        observer.unobserve(currentExperienceRef);
      }
    };
  }, []); // Dependency array remains empty as there are no dynamic dependencies

  return (
    <section className={`experience-container ${isVisible ? 'animate' : ''}`} ref={experienceRef}>
      <h5>Leadership & Volunteering Experience</h5>

      <div className="experience-content">
        <div className="arrow-right" onClick={slideRight}>
          <span className="material-symbol-outlined"></span>
        </div>

        <div className="arrow-left" onClick={slideLeft}>
          <span className="material-symbol-outlined"></span>
        </div>

        <Slider ref={sliderRef} {...settings}>
          {EXPERIENCE.map((item) => (
            <Link to={item.route} className="experience-link" key={item.title}>
              <ExperienceCard details={item} />
            </Link>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Experience;