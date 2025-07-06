import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import dotsPattern from "../assets/images/dots_pattern.png";
import dotsPatternBottom from "../assets/images/dots_pattern_bottom.png";
import imageUnscreen from "../assets/images/Image.png";
import robotSlider from "../assets/images/robot-slider-img2.png";
import robotSlider3 from "../assets/images/robot-slider-img3.png";

const Splash = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    const [showSplash, setShowSplash] = useState(true);

    const slides = [
        {
            id: 0,
            className: "first_slide",
            imgSrc: imageUnscreen,
            title: "Welcome to Aarogya AI",
            content: "Your AI Mental Health Companion—here to talk, listen, and guide you in your language.",
        },
        {
            id: 1,
            className: "second_slide",
            imgSrc: robotSlider,
            title: "Speak Freely, Be Understood",
            content: "Our multilingual AI understands your emotions and responds with empathy and care.",
        },
        {
            id: 2,
            className: "third_slide",
            imgSrc: robotSlider3,
            title: "Smart Support, Always With You",
            content: "No judgments. No waiting. Just support when you need it—powered by Indic AI.",
        },
    ];

    useEffect(() => {
        const splashTimer = setTimeout(() => {
            setShowSplash(false);
        }, 1500);
        return () => clearTimeout(splashTimer);
    }, []);

    const handleNext = () => {
        if (activeSlide < slides.length - 1) {
            setActiveSlide(activeSlide + 1);
        }
    };

    return (
        <div className="site_content">
            {/* Loader */}
            {showSplash && (
                <div className="loader-mask1">
                    <div id="splash-screen-page" className="position-relative">
                        <div className="dots_pattern_img1">
                            <img className="hekko" src={dotsPattern} alt="dots_pattern" />
                        </div>
                        <div className="splash-screen-logo">
                            <img className="logo_img" src={logo} alt="logo" />
                            <h1 className="AarogyaGPT">Aarogya AI</h1>
                            <p className="meets">Your Multilingual Mental Health Assistant</p>
                        </div>
                        <div className="dots_pattern_img2">
                            <img className="hekko" src={dotsPatternBottom} alt="dots_pattern_bottom" />
                        </div>
                    </div>
                </div>
            )}

            {/* Carousel */}
            <div className="container onboarding-slider position-relative">
                <div id="carouselExampleIndicators" className="carousel slide">
                    <div className="carousel-inner">
                        {slides.map((slide, index) => (
                            <div
                                key={slide.id}
                                className={`carousel-item ${slide.className} ${activeSlide === index ? "active" : ""}`}
                                id={`slide${slide.id + 1}`}
                            >
                                <div className={`Onboarding-Screen-1 slide${slide.id + 1}`}>
                                    <div className="row Onboarding-Screen-1-full align-items-center">
                                        <div className="col-12 col-md-6 text-center">
                                            <img className="Image-unscreen img-fluid" src={slide.imgSrc} alt="slide" />
                                        </div>
                                        <div className="col-12 col-md-6 text-center text-md-start mt-4 mt-md-0">
                                            <h2 className="welcome_to_aarogya_text">{slide.title}</h2>
                                            <p className="proin">{slide.content}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Slider Dots */}
                    <div className="carousel-indicators custom-slider-btn">
                        {slides.map((slide, index) => (
                            <button
                                key={slide.id}
                                type="button"
                                id={`slide${slide.id}`}
                                data-bs-target="#carouselExampleIndicators"
                                data-bs-slide-to={index}
                                className={`custom-slider-dots ${activeSlide === index ? "active" : ""}`}
                                onClick={() => setActiveSlide(index)}
                            ></button>
                        ))}
                    </div>
                </div>

                {/* Detached Button */}
                <div
                    className="onboarding-next-btn-slider bottom-fix-btn"
                    style={{
                        position: "absolute",
                        right: "40px",
                        bottom: "600px",
                        transform: "translateX(600px) translateY(-60px)"
                    }}
                >
                    {activeSlide < slides.length - 1 ? (
                        <div onClick={() => setActiveSlide(activeSlide + 1)}>
                            <Link to="#">Next</Link>
                        </div>
                    ) : (
                        <div>
                            <Link to="/LetsYouIn">Get Started</Link>
                        </div>
                    )}
                </div>

            </div>

        </div>
    );
};

export default Splash;
