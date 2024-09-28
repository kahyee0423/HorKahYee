import React from 'react'
import './ExperienceCard.css'

const ExperienceCard = ({details}) => {
  return (
    <div className="experience-card">
        <h6>{details.title}</h6>

        <div className="duration">{details.date}</div>

        <ul>
            {details.details.map((item) => (
                <li key = {item}>{item}</li>
            ))}
        </ul>
    </div>
  )
}

export default ExperienceCard;