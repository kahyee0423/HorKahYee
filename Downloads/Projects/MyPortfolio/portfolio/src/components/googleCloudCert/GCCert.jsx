import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { GOOGLE_CLOUD_CERT } from '../../utils/data.js'; // Ensure this is an array
import './GCCert.css';

const GCCert = () => {
    const [searchTerm, setSearchTerm] = useState(''); // For category search
    const [skillSearchTerm, setSkillSearchTerm] = useState(''); // For skill search
    const [filteredCerts, setFilteredCerts] = useState([]); // Initialize as empty array
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
        // Initialize filteredCerts with GOOGLE_CLOUD_CERT data
        setFilteredCerts(GOOGLE_CLOUD_CERT || []); // Set to an empty array if undefined
    }, []);

    // Combine filtering for both category and skills
    useEffect(() => {
        const filtered = (GOOGLE_CLOUD_CERT || []).filter(cert => {
            const matchesCategory = cert.category.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesSkill = cert.skills && cert.skills.some(skill => 
                skill.skill.toLowerCase().includes(skillSearchTerm.toLowerCase())
            );
            return matchesCategory && matchesSkill; // Include cert only if it matches both search terms
        });
        setFilteredCerts(filtered); // Update the filtered certificates
    }, [searchTerm, skillSearchTerm]); // Re-run filtering when either search term changes

    return (
        <section className="google-cloud-certifications">
            <h2>Google Cloud Vanguard Accolades</h2>
            <div className="search-bar-container">
                <input 
                    type="text" 
                    placeholder="Search by category..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-bar"
                />
                <input 
                    type="text" 
                    placeholder="Search by skill..." 
                    value={skillSearchTerm}
                    onChange={(e) => setSkillSearchTerm(e.target.value)}
                    className="search-bar"
                />
            </div>

            <div className="badge-count-container">
                <p>Total Skill Badges: {filteredCerts.length}</p> {/* Display the updated count */}
            </div>

            <div className="cert-grid">
                {filteredCerts.length > 0 ? (
                    filteredCerts.map((cert, index) => (
                        <div className="cert-card" key={index}>
                            <a href={cert.verify} target="_blank" rel="noopener noreferrer">
                                <div className="image-container">
                                    <img src={cert.img} alt={cert.name} className="cert-image" />
                                    <div className="cert-skills">
                                        <h4>Skills:</h4>
                                        <ul>
                                            {cert.skills && cert.skills.map((skill, idx) => (
                                                <li key={idx}>{skill.skill}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </a>
                            <div className="cert-info">
                                <h3>{cert.name}</h3>
                                <p>{cert.category}</p>
                                <p>ID: {cert.id}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No certifications found.</p>
                )}
            </div>

            <div className="button-container">
                <button className="button" onClick={() => navigate('/')}>Back To Home</button>
            </div>
        </section>
    );
};

export default GCCert;