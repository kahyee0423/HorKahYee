import React from 'react'
import './HangingImage.css'

const HangingImage = ({ src, alt }) => {
  return (
    <div className="hanging-image">
        <div className="string left" />  
        <div className="nut" />
        <div className="string right" /> 
        <img className="image" src={src} alt={alt} />
    </div>
  );
};

export default HangingImage;