import React, { useEffect } from 'react';
import './Profile.css';
import { useNavigate, Link } from 'react-router-dom';

const Profile = () => {
    const navigate = useNavigate();
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <section className="profile-container">
            <div className="title">Know More About Me</div>

            <div className="header-container">
                <img src={`${process.env.PUBLIC_URL}/assets/generalPic/Name2.png`} className="my-logo" alt="Logo" />
                    <img src={`${process.env.PUBLIC_URL}/assets/generalPic/ky.png`} className="my-photo" alt="myPicture" />
                    
                <div className="sub-button">
                    <Link to="https://g.dev/kahyee0423" className="link">
                        <img src={`${process.env.PUBLIC_URL}/assets/generalPic/google-dev.png`} alt="Google Developer" />
                        <span>Google Developer Profile</span>
                    </Link>
                    <Link to="/GCCert" className="link">
                        <img src={`${process.env.PUBLIC_URL}/assets/generalPic/googleCloud.png`} alt="Google Cloud Skills Boost" />
                        <span>Google Cloud Skill Badge Profile</span>
                    </Link>
                    <Link to="/AlibabaCloud" className="link">
                        <img src={`${process.env.PUBLIC_URL}/assets/generalPic/alibabaCloud.png`} alt="Alibaba Cloud" />
                        <span>Alibaba Cloud Skills Profile</span>
                    </Link>
                    <Link to="https://www.credly.com/users/kahyee04233" className="link">
                        <img src={`${process.env.PUBLIC_URL}/assets/generalPic/credly.png`} alt="Credly" />
                        <span>Credly Profile</span>
                    </Link>
                    <Link to="https://www.linkedin.com/in/kahyee0423/" className="link">
                        <img src={`${process.env.PUBLIC_URL}/assets/generalPic/linkedin.png`} alt="LinkedIn" />
                        <span>LinkedIn Profile</span>
                    </Link>
                </div>
            </div>

            <div className="button-container">
                <button className="button" onClick={() => navigate('/')}>Back To Home</button>
            </div>
        </section>
    );
}

export default Profile;

