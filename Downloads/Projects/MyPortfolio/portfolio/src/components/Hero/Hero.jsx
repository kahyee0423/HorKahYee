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
                <p>EXCO @ EPCD GDSC USM</p>
                <p>Google Cloud Data Analytics Certified</p>
                <p>Google Cloud Computing Certified</p>
                <p>Google Cloud Cybersecurity Certified</p>
                <p>Google Cloud Innovator</p>
                <p>Woman In Techmakers Members</p>
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
                            <a href="https://skillshop.credential.net/7d65c318-9151-4af9-ba8d-64e9bf3bdadc"><img src={`${process.env.PUBLIC_URL}assets/googleCloudCert/google_cert.png`} alt="" /></a>
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
                        <p>Kah Yee is an ambitious second-year student at the University of Science, Malaysia, where she is diligently pursuing a Bachelor of Computer Science (Honours) degree, maintaining an impressive CGPA of 3.64. Her academic journey commenced with distinction, achieving a perfect CGPA of 4.0 at Kolej Matrikulasi Perak and securing 10As in the Malaysian SPM examination.</p>
                        <p>Proficient in multiple languages, including Chinese, Malay, English, and French, Kah Yee stands out as a key figure in the Google Developer Student Club (GDSC) USM, currently serving as an Executive Committee member in the Event Planning and Culture Development Department. Her extensive experience includes emceeing and facilitating workshops, as well as orchestrating innovative projects that leverage data analysis and software development using Python and C++.</p>
                        <p>Noteworthy among her accolades is the Silver Award at the Pre-University Matriculation Innovation Competition 2023, complemented by her certifications as a Google Cloud Innovator and holder of various prestigious Google and Alibaba Cloud credentials. Kah Yee's diverse interests in badminton, chess, and photography further enrich her profile, exemplifying her multifaceted talents and commitment to excellence.</p>
                        
                        <button onClick={toggleWhitePaper} className="close-paper-button">Close</button>
                    </div>
                </div>
            )}
            {isPaperVisible && <div className="blur-background"></div>}
        </section>
    );
}

export default Hero;