import React, { useEffect, useState } from "react";
import buttonBack from "../assets/images/Button-Back.png";
import logo from "../assets/images/logo.png";
import FbIcon from "../assets/images/Icon-fb.png";
import GoogleIcon from "../assets/images/Icon-google.png";
import AppleIcon from "../assets/images/Icon-apple.png";
import WhatsappIcon from "../assets/images/Icon-whatsapp.png";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../components/Loader";

const LetsYouIn = () => {
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

    const handleSignIn = () => {
        navigate("/SignIn");
    };

    return (
        <>
            <div className="site_content">
                {/* ====================================== Let You Screen ===================================== */}
                <div className="let-you-page-main d-flex flex-column min-vh-100">
                    {/* Header + Logo Section */}
                    <div className="let-you-screen-main">
                        <header className="back-btn back-btn2 top-navbar" id="top-navbar">
                            <Link onClick={handleBackClick}>
                                <img className="profile-pic" src={buttonBack} alt="Button-Back" />
                            </Link>
                        </header>
                        <div className="Aarogya_img_main text-center">
                            <img className="Aarogya_img" src={logo} alt="logo" />
                        </div>
                    </div>

                    {/* Main Body Centered */}
                    <div className="flex-grow-1 d-flex flex-column justify-content-center align-items-center w-auto">
                        <div className="lets_you_in_box text-center px-3 w-100" style={{ maxWidth: 400 }}>
                            <h2 className="lets_you_in_text mb-4">Let's You In</h2>

                            <div className="icons_main d-flex justify-content-center flex-wrap gap-3 mb-4">
                                <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                                    <img className="icons" src={FbIcon} alt="Facebook" />
                                </a>
                                <a href="https://www.google.com" target="_blank" rel="noreferrer">
                                    <img className="icons" src={GoogleIcon} alt="Google" />
                                </a>
                                <a href="https://www.icloud.com" target="_blank" rel="noreferrer">
                                    <div className="apple-main">
                                        <img className="apple" src={AppleIcon} alt="Apple" />
                                    </div>
                                </a>
                                <a href="https://wa.me/+12345678899" target="_blank" rel="noreferrer">
                                    <img className="icons" src={WhatsappIcon} alt="WhatsApp" />
                                </a>
                            </div>

                            <div className="or mb-3">
                                <p>or</p>
                            </div>

                            <button className="sign_with_pass_btn w-100" onClick={handleSignIn}>
                                Sign In With Password
                            </button>
                        </div>
                    </div>

                    {/* Sticky Footer */}
                    <footer id="let-you-footer" className="text-center py-3">
                        <p className="mb-0">
                            Don’t have an account? <Link style={{ color: "green" }} to="/SignUp">Sign up</Link>

                        </p>
                    </footer>
                </div>

                {/* ====================================== Let You Screen End ===================================== */}
            </div>
        </>
    );
};

export default LetsYouIn;
