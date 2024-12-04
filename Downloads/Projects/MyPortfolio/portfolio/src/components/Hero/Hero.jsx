import React, { useState } from 'react';
import './Hero.css';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
    const [isPaperVisible, setPaperVisible] = useState(false);
    const navigate = useNavigate();

    const goToProfile = () => {
        navigate('/profile'); 
    };

    const goToCloud =() => {
        navigate('/AlibabaCloud');
    }

    const goToGCC =() =>{
        navigate('/GCCert');
    }

    const toggleWhitePaper = () => {
        setPaperVisible(!isPaperVisible);
    };

    return (
        <section className="hero-container">
            <div className="hero-content">
                <h2>Hi, I am Kah Yee</h2>
                <p>A Year 2 USM Computer Science Student</p>
                <p>Head of Department @ EPCD GDGoC USM</p>
                <p>Google Cloud Data Analytics Certified</p>
                <p>Google Cloud Computing Certified</p>
                <p>Google Cloud Cybersecurity Certified</p>
                <p>Google Cloud Innovator</p>
                <p>Alibaba Cloud Certified Associate</p>
                <div className="resume-button-container">
                    <a 
                        href="https://drive.google.com/file/d/12BnFbBJ5briyZb-1JaFojQ33_ealr7d_/view?usp=sharing" 
                        className="view-resume-btn"
                    >
                        Click Here to View My Resume
                    </a>
                    <div className="letter-image" onClick={toggleWhitePaper}>
                        <div className="animated-mail">
                            <div className="back-fold"></div>
                            <div className="letter">
                                <div className="letter-border"></div>
                                <div className="letter-title"></div>
                                <div className="letter-context"></div>
                                <div className="letter-stamp">
                                    <div className="letter-stamp-inner"></div>
                                </div>
                            </div>
                            <div className="top-fold"></div>
                            <div className="body"></div>
                            <div className="left-fold"></div>
                        </div>
                        <div className="shadow"></div>
                    </div>
                </div>
            </div>

            <div className="hero-img">
                <div className="main-image">
                    <img src={`${process.env.PUBLIC_URL}/assets/generalPic/Hero.png`} alt="Hero" />
                </div>

                <div className="icon-wrapper">
                    <div className="cert-icon-container">
                        <div className="cert-icon">
                            <a href="https://www.credly.com/badges/26a19e43-500c-46e1-a47a-2f107b436bd0/public_url"><img src={`${process.env.PUBLIC_URL}/assets/generalPic/data-cert.png`} alt="" /></a>
                        </div> 
                        <div className="cert-icon">
                            <a href="https://skillshop.credential.net/7d65c318-9151-4af9-ba8d-64e9bf3bdadc"><img src={`${process.env.PUBLIC_URL}/assets/GoogleCloudCert/google_cert.png`} alt="" /></a>
                        </div>
                        <div className="cert-icon">
                            <a href="https://www.credly.com/badges/b497837f-43fa-44cb-b7a4-7797ece0325b/public_url"><img src={`${process.env.PUBLIC_URL}/assets/generalPic/cloud-cert-2.png`} alt="" /></a>
                        </div>
                        <div className="cert-icon">
                            <a href="https://www.credly.com/badges/c980746e-f269-48f5-bb17-ebe62a1f8501/public_url"><img src={`${process.env.PUBLIC_URL}/assets/GoogleCloudCert/cyber-cert.png`} alt="" /></a>
                        </div>
                        <div className="cert-icon">
                            <img src={`${process.env.PUBLIC_URL}/assets/generalPic/googleCloud.png`} onClick={goToGCC} alt="" />
                        </div>
                        <div className="cert-icon">
                            <img src={`${process.env.PUBLIC_URL}/assets/generalPic/alibabaCloud.png`} onClick={goToCloud} alt="" />
                        </div>
                    </div>
                </div>

                <button className="profile-btn" onClick={goToProfile}>View Profile</button>
            </div>

            {isPaperVisible && (
                <div className="white-paper">
                    <div className="paper-content">
                        <h2 className="caveat-brush-regular">Here is a Letter for You: </h2>
                        <h3>"A Glimpse into My Journey"</h3>
                        <p>She is a certified professional in cloud and analytics technologies, holding credentials from Google Cloud (Data Analytics, Computing Foundations, Cybersecurity), Alibaba Cloud (Certified Associate), and Google Analytics. Recognized as an AWS AI & ML Scholar, she is currently advancing her expertise in AI programming while earning multiple skill badges through Google Cloud and Alibaba Cloud programs.</p>
                        <p>Fluent in five languages, including Chinese, Malay, English, French, and Japanese, she leverages her linguistic abilities for effective communication and collaboration. Her leadership skills shine through her active roles in the Google Developer Group On Campus (GDGoC USM), where she has served as the EXCO for the department of Event Planning and Culture Development and now leads the department.</p>
                        <p>She has contributed significantly to her field by emceeing workshops, facilitating technical sessions, and speaking on topics like front-end development with Angular. Additionally, she has been part of organizing university-level hackathons and received a Silver Award at the Pre-University Matriculation Innovation Competition (PIITRAM 2023) for her innovative project certified by MYIPO.</p>
                        <p>Her technical portfolio includes projects in predictive modeling for market trends and wine quality using Python and the development of a bakery management system utilizing object-oriented programming in C++. As a collaborative team player, she excels in event planning and workshop facilitation, showcasing strong verbal communication and leadership capabilities.</p>
                        <p>Dedicated to continuous learning, she actively participates in programs like AI Skills Quest while expanding her technical knowledge in areas such as PostgreSQL and Oracle SQL. Outside of academics and professional pursuits, she enjoys badminton, chess, and photography, which demonstrating a well-rounded and dynamic approach to personal and professional growth.</p>
                        
                        <button onClick={toggleWhitePaper} className="close-paper-button">Close</button>
                    </div>
                </div>
            )}
            {isPaperVisible && <div className="blur-background"></div>}
        </section>
    );
}

export default Hero;