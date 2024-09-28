import React from 'react';
import './ContactInfoCard.css';

const ContactInfoCard = ({ iconUrl, text }) => {
  const isLink = text.startsWith('http');
  return (
    <a href={isLink ? text : '#'} target={isLink ? '_blank' : '_self'} rel={isLink ? 'noopener noreferrer' : ''} className="contact-details-card">
      <div className="icon">
        <img src={iconUrl} alt={text} />
      </div>
      <div className="text">
        {text}
      </div>
    </a>
  );
}

export default ContactInfoCard;


