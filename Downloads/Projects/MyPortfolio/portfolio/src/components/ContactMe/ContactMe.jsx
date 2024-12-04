import React from 'react'
import './ContactMe.css'
import ContactInfoCard from './ContactInfoCard/ContactInfoCard'

const ContactMe = () => {
  return (
    <section className="contact-container">
        <h5>Contact Me</h5>

        <div className="contact-content">
            
              <ContactInfoCard
                iconUrl={`${process.env.PUBLIC_URL}/assets/generalPic/gmail.png`}
                text="kahyee0423@gmail.com"
                isLink={false}
              />
                <ContactInfoCard
                iconUrl={`${process.env.PUBLIC_URL}/assets/generalPic/facebook.png`}
                text="https://www.facebook.com/profile.php?id=100018628087825"
                isLink={true}
                />
                <ContactInfoCard
                iconUrl={`${process.env.PUBLIC_URL}/assets/generalPic/instagram.png`}
                text="https://www.instagram.com/kahyxx0423/"
                isLink={true}
                />
                <ContactInfoCard
                iconUrl={`${process.env.PUBLIC_URL}/assets/generalPic/linkedin.png`}
                text="https://www.linkedin.com/in/kahyee0423/"
                isLink={true}
                />
                <ContactInfoCard
                iconUrl={`${process.env.PUBLIC_URL}/assets/generalPic/github.png`}
                text="https://github.com/kahyee0423"
                isLink={true}
                />
            </div>
    </section>
  )
}

export default ContactMe;