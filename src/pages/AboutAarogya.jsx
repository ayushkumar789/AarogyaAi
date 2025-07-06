import React, { useEffect, useState } from "react";
import buttonBack from "../assets/images/Button-Back.png";
import facebook from "../assets/images/facebook.png";
import insta from "../assets/images/insta.png";
import twitter from "../assets/images/twitter.png";
import youtube from "../assets/images/youtube.png";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../components/Loader";

const AboutAarogya = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    const handleBackClick = () => {
        navigate(-1);
    };

    useEffect(() => {
        setTimeout(() => setLoading(false), 500);
    }, []);

    if (loading) {
        return <Loader />;
    }

    return (
        <>
            <div className="site_content">
                {/* <!-- ====================================== About Screen Start ===================================== --> */}
                <div className="verification-main">
                    <div className="container verify-screen-main p-0">
                        <header className="back-btn back-btn2 top-navbar" id="top-navbar">
                            <Link onClick={handleBackClick}>
                                <img className="profile-pic" src={buttonBack} alt="Button-Back" />
                            </Link>
                            <h1>About Aarogya GPT</h1>
                        </header>

                        <div className="verify-section-main align-items-stretch">
                            <div className="about_text_content">
                                <p className="about-content">
                                    <strong>Aarogya GPT</strong> is your intelligent mental health companion designed to provide safe, supportive, and multilingual conversations for emotional well-being. Powered by advanced Generative AI, Aarogya understands the nuances of human emotion and responds with empathy, cultural sensitivity, and linguistic versatility.
                                </p>
                                <p className="about-content">
                                    Whether you're feeling stressed, anxious, or just need someone to talk to — Aarogya GPT is available 24/7. It doesn’t replace professional therapy but offers a secure, judgment-free zone to express your thoughts. With regional language support, it makes mental health access inclusive and equitable for every Indian.
                                </p>
                                <p className="about-content">
                                    Our goal is to bridge the gap between silence and support. Through cutting-edge AI and a human-centric approach, Aarogya GPT empowers individuals to take the first step toward emotional wellness.
                                </p>
                            </div>

                            <h2 className="follow_us">Follow Us</h2>
                            <div className="media-icon-main">
                                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                    <img className="media-icon" src={facebook} alt="facebook" />
                                    <p className="media-icon-name">Facebook</p>
                                </a>
                                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                    <img className="media-icon" src={insta} alt="insta" />
                                    <p className="media-icon-name">Instagram</p>
                                </a>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                    <img className="media-icon" src={twitter} alt="twitter" />
                                    <p className="media-icon-name">Twitter</p>
                                </a>
                                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                                    <img className="media-icon" src={youtube} alt="youtube" />
                                    <p className="media-icon-name">YouTube</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- ====================================== About Screen End ===================================== --> */}
            </div>
        </>
    );
};

export default AboutAarogya;
