import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png"
import plusRobort from "../assets/images/plus-robort.png"
import menuGirlImg from "../assets/images/girl.png"
import { useDarkMode } from '../components/DarkModeContext';

const AarogyaGptHome = () => {
    const navigate = useNavigate();
    const { isDarkMode, toggleDarkMode } = useDarkMode();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // popup after 5 seconds
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    const hidePopup = (e) => {
        e.preventDefault();
        setIsVisible(false);
    };

    const handlePlusSubscription = () => {
        navigate("/PlusSubscription");
    };

    const handleSignIn = () => {
        navigate("/AarogyaChat");
    };

    return (
        <>
            <div className="site_content">
                {/* < !-- ====================================== Aarogya GPT Home Screen ===================================== --> */}
                <div className="verification-main">
                    <div className="container verify-screen-main">
                        <div className="aarogya-home-header">
                            <div className="back-btn back-btn2 p-0">
                                <Link to="/AarogyaGptHome">
                                    <img className="logo-home" src={logo} alt="Button-Back" />
                                </Link>
                                <h1>Aarogya GPT</h1>
                            </div>
                            <div className="notification-bell-main">
                                <Link to="/Notification">
                                    <svg className="notification-bell" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                        viewBox="0 0 24 24" fill="none">
                                        <mask id="mask0_3_4211" maskUnits="userSpaceOnUse" x="0" y="0"
                                            width="24" height="24">
                                            <rect width="24" height="24" fill="white" />
                                        </mask>
                                        <g mask="url(#mask0_3_4211)">
                                            <path
                                                d="M10 5C10 4.46957 10.2107 3.96086 10.5858 3.58579C10.9609 3.21071 11.4696 3 12 3C12.5304 3 13.0391 3.21071 13.4142 3.58579C13.7893 3.96086 14 4.46957 14 5C15.1484 5.54303 16.1274 6.38833 16.8321 7.4453C17.5367 8.50227 17.9404 9.73107 18 11V14C18.0753 14.6217 18.2954 15.2171 18.6428 15.7381C18.9902 16.2592 19.4551 16.6914 20 17H4C4.54494 16.6914 5.00981 16.2592 5.35719 15.7381C5.70457 15.2171 5.92474 14.6217 6 14V11C6.05956 9.73107 6.4633 8.50227 7.16795 7.4453C7.8726 6.38833 8.85159 5.54303 10 5Z"
                                                stroke="white" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round" />
                                            <path
                                                d="M9 17V18C9 18.7956 9.31607 19.5587 9.87868 20.1213C10.4413 20.6839 11.2044 21 12 21C12.7956 21 13.5587 20.6839 14.1213 20.1213C14.6839 19.5587 15 18.7956 15 18V17"
                                                stroke="white" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round" />
                                        </g>
                                    </svg>
                                    <div className="total_notification">5</div>
                                </Link>
                                <button className='iocns-btn-notf' data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none">
                                        <mask id="mask0_3_4206" maskUnits="userSpaceOnUse" x="0" y="0"
                                            width="24" height="24">
                                            <rect width="24" height="24" fill="white" />
                                        </mask>
                                        <g mask="url(#mask0_3_4206)">
                                            <path
                                                d="M19 6.87298C19.3062 7.04978 19.5601 7.30461 19.7358 7.6115C19.9115 7.9184 20.0026 8.26638 20 8.61998V15.156C19.9999 15.5126 19.9045 15.8628 19.7235 16.1701C19.5426 16.4775 19.2828 16.7308 18.971 16.904L12.971 20.737C12.674 20.9019 12.3398 20.9885 12 20.9885C11.6602 20.9885 11.326 20.9019 11.029 20.737L5.029 16.904C4.71736 16.7309 4.45763 16.4777 4.27671 16.1705C4.0958 15.8634 4.00026 15.5135 4 15.157V8.61998C4.00008 8.26334 4.09553 7.9132 4.27646 7.60585C4.45739 7.29851 4.71721 7.04513 5.029 6.87198L11.029 3.29998C11.3348 3.12975 11.679 3.04041 12.029 3.04041C12.379 3.04041 12.7232 3.12975 13.029 3.29998L19.029 6.87298H19V6.87298Z"
                                                stroke="white" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round" />
                                            <path
                                                d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                                                stroke="white" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round" />
                                        </g>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <h2 className="hello-ayush">Hello, Ayush <span className="wave">👋</span></h2>
                        <h3 className="have-fun">Let’s Have Fun with Aarogya!</h3>
                        <h4 className="conversation">Start a conversation with Aarogya right now!</h4>
                    </div>
                    <div className="verify-section-main align-items-stretch h-100">
                        <div className="aarogya-box-main">
                            <div className="plus-box-text-main">
                                <h4 className="aarogya-pluse-text">Aarogya GPT Plus</h4>
                                <h4 className="unlock">Unlock Aarogya premium to unlock all features.</h4>
                                <button className="upgrades-btn-main" onClick={handlePlusSubscription}>Upgrades</button>
                            </div>
                            <div className="plus-robort-main">
                                <img className="plus-robort" src={plusRobort} alt="plus-robort" />
                            </div>
                        </div>
                        <div className="print-continue-btn-head">
                            <div className="bottom-fix-btn onboarding-next-btn-home" onClick={handleSignIn}>
                                <Link to="/AarogyaChat">Start Chat with Aarogya</Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- ====================================== Aarogya GPT Home Screen End ===================================== --> */}
                {/* < !-- ====================================== Setting Screen ===================================== --> */}
                <div className="offcanvas offcanvas-start sidecanvas" tabIndex="-1" id="offcanvasExample"
                    aria-labelledby="offcanvasExampleLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasExampleLabel">Settings</h5>
                        <button type="button" className="text-reset" data-bs-dismiss="offcanvas" aria-label="Close">
                            <i className="ri-close-fill"></i>
                        </button>
                    </div>
                    <div className="offcanvas-body">
                        <div className="settings-main">
                            <div>
                                <Link to="/PersonalInfoUpdate">
                                    <div className="settings-main-sub">
                                        <img className="menu-girl-img" src={menuGirlImg} alt="girl" />
                                        <div>
                                            <h2 className="smith">Ayush Kumar</h2>
                                            <p className="smith-email">ayushkumarpanigrahi@mail.com</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div>
                                <Link to="/PersonalInfoUpdate">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none">
                                        <g>
                                            <path
                                                d="M2.7998 18.8001H6.7998L17.2998 8.30011C17.5624 8.03746 17.7708 7.72566 17.9129 7.3825C18.0551 7.03934 18.1282 6.67154 18.1282 6.30011C18.1282 5.92867 18.0551 5.56088 17.9129 5.21771C17.7708 4.87455 17.5624 4.56275 17.2998 4.30011C17.0372 4.03746 16.7254 3.82912 16.3822 3.68698C16.039 3.54484 15.6712 3.47168 15.2998 3.47168C14.9284 3.47168 14.5606 3.54484 14.2174 3.68698C13.8743 3.82912 13.5624 4.03746 13.2998 4.30011L2.7998 14.8001V18.8001Z"
                                                stroke="#00D061" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round" />
                                            <path d="M12.3018 5.30005L16.3018 9.30005" stroke="#00D061" strokeWidth="2"
                                                strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M14.7998 17.8H20.7998" stroke="#00D061" strokeWidth="2"
                                                strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M17.7998 14.8V20.8" stroke="#00D061" strokeWidth="2"
                                                strokeLinecap="round" strokeLinejoin="round" />
                                        </g>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                        <Link to="/AarogyaChat">
                            <div className="setting-opestion-main setting-opestion-space">
                                <div className="setting-opestion-main-sub">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"
                                        fill="none">
                                        <rect opacity="0.08" width="48" height="48" rx="8" fill="#00D061" />
                                        <g>
                                            <path d="M24 17V31" stroke="#00D061" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round" />
                                            <path d="M17 24H31" stroke="#00D061" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round" />
                                        </g>
                                    </svg>
                                    <h2 className="smith new-chat">New Chat</h2>
                                </div>
                                <i className="ri-arrow-right-s-line"></i>
                            </div>
                        </Link>
                        <Link to="/History">
                            <div className="setting-opestion-main setting-opestion-space">
                                <div className="setting-opestion-main-sub">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"
                                        fill="none">
                                        <rect opacity="0.08" width="48" height="48" rx="8" fill="#00D061" />
                                        <g>
                                            <path d="M24 20V24L26 26" stroke="#00D061" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round" />
                                            <path
                                                d="M15.0498 23.0001C15.2739 20.8001 16.3001 18.7597 17.9325 17.268C19.565 15.7764 21.6895 14.938 23.9007 14.9127C26.1119 14.8874 28.255 15.6771 29.9211 17.1311C31.5872 18.5851 32.6597 20.6015 32.934 22.7958C33.2083 24.99 32.6651 27.2085 31.4082 29.0278C30.1512 30.8472 28.2684 32.1401 26.1191 32.6599C23.9697 33.1797 21.7042 32.89 19.7548 31.8461C17.8054 30.8022 16.3085 29.0772 15.5498 27.0001M15.0498 32.0001V27.0001H20.0498"
                                                stroke="#00D061" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round" />
                                        </g>
                                    </svg>
                                    <h2 className="smith new-chat">History</h2>
                                </div>
                                <i className="ri-arrow-right-s-line"></i>
                            </div>
                        </Link>

                        <Link to="/CancelSubscription">
                            <div className="setting-opestion-main setting-opestion-space">
                                <div className="setting-opestion-main-sub">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"
                                        fill="none">
                                        <rect opacity="0.08" width="48" height="48" rx="8" fill="#00D061" />
                                        <g>
                                            <path
                                                d="M23 18C23 18.7956 23.5268 19.5587 24.4645 20.1213C25.4021 20.6839 26.6739 21 28 21C29.3261 21 30.5979 20.6839 31.5355 20.1213C32.4732 19.5587 33 18.7956 33 18C33 17.2044 32.4732 16.4413 31.5355 15.8787C30.5979 15.3161 29.3261 15 28 15C26.6739 15 25.4021 15.3161 24.4645 15.8787C23.5268 16.4413 23 17.2044 23 18Z"
                                                stroke="#00D061" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round" />
                                            <path d="M23 18V22C23 23.657 25.239 25 28 25C30.761 25 33 23.657 33 22V18"
                                                stroke="#00D061" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round" />
                                            <path d="M23 22V26C23 27.657 25.239 29 28 29C30.761 29 33 27.657 33 26V22"
                                                stroke="#00D061" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round" />
                                            <path d="M23 26V30C23 31.657 25.239 33 28 33C30.761 33 33 31.657 33 30V26"
                                                stroke="#00D061" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round" />
                                            <path
                                                d="M19 21H16.5C16.1022 21 15.7206 21.158 15.4393 21.4393C15.158 21.7206 15 22.1022 15 22.5C15 22.8978 15.158 23.2794 15.4393 23.5607C15.7206 23.842 16.1022 24 16.5 24H17.5C17.8978 24 18.2794 24.158 18.5607 24.4393C18.842 24.7206 19 25.1022 19 25.5C19 25.8978 18.842 26.2794 18.5607 26.5607C18.2794 26.842 17.8978 27 17.5 27H15"
                                                stroke="#00D061" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round" />
                                            <path d="M17 27V28M17 20V21" stroke="#00D061" strokeWidth="2"
                                                strokeLinecap="round" strokeLinejoin="round" />
                                        </g>
                                    </svg>
                                    <h2 className="smith new-chat p-0">Cancel Subscriptions</h2>
                                </div>
                                <i className="ri-arrow-right-s-line"></i>
                            </div>
                        </Link>
                        <Link to="/PersonalInformation">
                            <div className="setting-opestion-main setting-opestion-space">
                                <div className="setting-opestion-main-sub">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"
                                        fill="none">
                                        <rect opacity="0.08" width="48" height="48" rx="8" fill="#00D061" />
                                        <g>
                                            <path
                                                d="M15 19C15 18.2044 15.3161 17.4413 15.8787 16.8787C16.4413 16.3161 17.2044 16 18 16H30C30.7956 16 31.5587 16.3161 32.1213 16.8787C32.6839 17.4413 33 18.2044 33 19V29C33 29.7956 32.6839 30.5587 32.1213 31.1213C31.5587 31.6839 30.7956 32 30 32H18C17.2044 32 16.4413 31.6839 15.8787 31.1213C15.3161 30.5587 15 29.7956 15 29V19Z"
                                                stroke="#00D061" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round" />
                                            <path
                                                d="M19 22C19 22.5304 19.2107 23.0391 19.5858 23.4142C19.9609 23.7893 20.4696 24 21 24C21.5304 24 22.0391 23.7893 22.4142 23.4142C22.7893 23.0391 23 22.5304 23 22C23 21.4696 22.7893 20.9609 22.4142 20.5858C22.0391 20.2107 21.5304 20 21 20C20.4696 20 19.9609 20.2107 19.5858 20.5858C19.2107 20.9609 19 21.4696 19 22Z"
                                                stroke="#00D061" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round" />
                                            <path d="M27 20H29" stroke="#00D061" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round" />
                                            <path d="M27 24H29" stroke="#00D061" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round" />
                                            <path d="M19 28H29" stroke="#00D061" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round" />
                                        </g>
                                    </svg>
                                    <h2 className="smith new-chat">Personal Info</h2>
                                </div>
                                <i className="ri-arrow-right-s-line"></i>
                            </div>
                        </Link>
                        <Link to="/Security">
                            <div className="setting-opestion-main setting-opestion-space">
                                <div className="setting-opestion-main-sub">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"
                                        fill="none">
                                        <rect opacity="0.08" width="48" height="48" rx="8" fill="#00D061" />
                                        <g>
                                            <path
                                                d="M23.9989 15C26.3347 17.0666 29.3833 18.1426 32.4989 18C32.9524 19.543 33.0912 21.1615 32.907 22.7592C32.7227 24.3569 32.2192 25.9013 31.4263 27.3005C30.6333 28.6998 29.5672 29.9254 28.2913 30.9045C27.0154 31.8836 25.5556 32.5962 23.9989 33C22.4421 32.5962 20.9823 31.8836 19.7064 30.9045C18.4305 29.9254 17.3644 28.6998 16.5715 27.3005C15.7785 25.9013 15.275 24.3569 15.0907 22.7592C14.9065 21.1615 15.0453 19.543 15.4989 18C18.6144 18.1426 21.663 17.0666 23.9989 15Z"
                                                stroke="#00D061" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round" />
                                            <path
                                                d="M23 23C23 23.2652 23.1054 23.5196 23.2929 23.7071C23.4804 23.8946 23.7348 24 24 24C24.2652 24 24.5196 23.8946 24.7071 23.7071C24.8946 23.5196 25 23.2652 25 23C25 22.7348 24.8946 22.4804 24.7071 22.2929C24.5196 22.1054 24.2652 22 24 22C23.7348 22 23.4804 22.1054 23.2929 22.2929C23.1054 22.4804 23 22.7348 23 23Z"
                                                stroke="#00D061" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round" />
                                            <path d="M24 24V26.5" stroke="#00D061" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round" />
                                        </g>
                                    </svg>
                                    <h2 className="smith new-chat">Security</h2>
                                </div>
                                <i className="ri-arrow-right-s-line"></i>
                            </div>
                        </Link>

                        <Link to="/Language">
                            <div className="setting-opestion-main setting-opestion-space">
                                <div className="setting-opestion-main-sub">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"
                                        fill="none">
                                        <rect opacity="0.08" width="48" height="48" rx="8" fill="#00D061" />
                                        <g>
                                            <path d="M15 19V17H28V19" stroke="#00D061" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round" />
                                            <path d="M22 17V31" stroke="#00D061" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round" />
                                            <path d="M24 31H20" stroke="#00D061" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round" />
                                            <path d="M27 25V24H33V25" stroke="#00D061" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round" />
                                            <path d="M30 24V31" stroke="#00D061" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round" />
                                            <path d="M29 31H31" stroke="#00D061" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round" />
                                        </g>
                                    </svg>
                                    <h2 className="smith new-chat">Language</h2>
                                </div>
                                <p className="version">English (US)</p>
                                <i className="ri-arrow-right-s-line"></i>
                            </div>
                        </Link>

                        <Link to="/Faq">
                            <div className="setting-opestion-main setting-opestion-space">
                                <div className="setting-opestion-main-sub">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"
                                        fill="none">
                                        <rect opacity="0.08" width="48" height="48" rx="8" fill="#00D061" />
                                        <g>
                                            <path
                                                d="M24 33C28.9706 33 33 28.9706 33 24C33 19.0294 28.9706 15 24 15C19.0294 15 15 19.0294 15 24C15 28.9706 19.0294 33 24 33Z"
                                                stroke="#00D061" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round" />
                                            <path d="M24 29V29.01" stroke="#00D061" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round" />
                                            <path
                                                d="M24 25.5C23.9816 25.1754 24.0692 24.8536 24.2495 24.5831C24.4299 24.3125 24.6933 24.1079 25 24C25.3759 23.8563 25.7132 23.6273 25.9856 23.331C26.2579 23.0347 26.4577 22.6793 26.5693 22.2926C26.6809 21.906 26.7013 21.4987 26.6287 21.1029C26.5562 20.7071 26.3928 20.3335 26.1513 20.0116C25.9099 19.6896 25.597 19.4281 25.2373 19.2477C24.8776 19.0672 24.4809 18.9727 24.0785 18.9716C23.6761 18.9705 23.2789 19.0628 22.9182 19.2412C22.5576 19.4197 22.2432 19.6795 22 20"
                                                stroke="#00D061" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round" />
                                        </g>
                                    </svg>
                                    <h2 className="smith new-chat">FAQs</h2>
                                </div>
                                <i className="ri-arrow-right-s-line"></i>
                            </div>
                        </Link>
                        <Link to="/DataPrivacy">
                            <div className="setting-opestion-main setting-opestion-space">
                                <div className="setting-opestion-main-sub">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"
                                        fill="none">
                                        <rect opacity="0.08" width="48" height="48" rx="8" fill="#00D061" />
                                        <g>
                                            <path
                                                d="M29 23H19C17.8954 23 17 23.8954 17 25V31C17 32.1046 17.8954 33 19 33H29C30.1046 33 31 32.1046 31 31V25C31 23.8954 30.1046 23 29 23Z"
                                                stroke="#00D061" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round" />
                                            <path
                                                d="M24 29C24.5523 29 25 28.5523 25 28C25 27.4477 24.5523 27 24 27C23.4477 27 23 27.4477 23 28C23 28.5523 23.4477 29 24 29Z"
                                                stroke="#00D061" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round" />
                                            <path
                                                d="M20 23V19C20 17.9391 20.4214 16.9217 21.1716 16.1716C21.9217 15.4214 22.9391 15 24 15C25.0609 15 26.0783 15.4214 26.8284 16.1716C27.5786 16.9217 28 17.9391 28 19V23"
                                                stroke="#00D061" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round" />
                                        </g>
                                    </svg>
                                    <h2 className="smith new-chat">Data & Privacy Policy</h2>
                                </div>
                                <i className="ri-arrow-right-s-line"></i>
                            </div>
                        </Link>
                        <Link to="/AboutAarogya">
                            <div className="setting-opestion-main setting-opestion-space">
                                <div className="setting-opestion-main-sub">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"
                                        fill="none">
                                        <rect opacity="0.08" width="48" height="48" rx="8" fill="#00D061" />
                                        <g>
                                            <path
                                                d="M24 33C28.9706 33 33 28.9706 33 24C33 19.0294 28.9706 15 24 15C19.0294 15 15 19.0294 15 24C15 28.9706 19.0294 33 24 33Z"
                                                stroke="#00D061" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round" />
                                            <path d="M24 20H24.01" stroke="#00D061" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round" />
                                            <path d="M23 24H24V28H25" stroke="#00D061" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round" />
                                        </g>
                                    </svg>
                                    <h2 className="smith new-chat">About Aarogya GPT</h2>
                                </div>
                                <p className="version">v2.0.2</p>
                                <i className="ri-arrow-right-s-line"></i>
                            </div>
                        </Link>
                        <Link to="/Feedback">
                            <div className="setting-opestion-main setting-opestion-space">
                                <div className="setting-opestion-main-sub">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"
                                        fill="none">
                                        <rect opacity="0.08" width="48" height="48" rx="8" fill="#00D061" />
                                        <g>
                                            <path
                                                d="M16 32.0001H20L30.5 21.5001C31.0304 20.9696 31.3284 20.2502 31.3284 19.5001C31.3284 18.7499 31.0304 18.0305 30.5 17.5001C29.9696 16.9696 29.2501 16.6716 28.5 16.6716C27.7499 16.6716 27.0304 16.9696 26.5 17.5001L16 28.0001V32.0001Z"
                                                stroke="#00D061" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round" />
                                            <path d="M25.5 18.5L29.5 22.5" stroke="#00D061" strokeWidth="2"
                                                strokeLinecap="round" strokeLinejoin="round" />
                                        </g>
                                    </svg>
                                    <h2 className="smith new-chat">Send Feedback</h2>
                                </div>
                                <i className="ri-arrow-right-s-line"></i>
                            </div>
                        </Link>
                        <Link to="/ContactUs">
                            <div className="setting-opestion-main setting-opestion-space">
                                <div className="setting-opestion-main-sub">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"
                                        fill="none">
                                        <rect opacity="0.08" width="48" height="48" rx="8" fill="#00D061" />
                                        <g>
                                            <path
                                                d="M16 15H18C18.2652 15 18.5196 15.1054 18.7071 15.2929C18.8946 15.4804 19 15.7348 19 16V18C19 18.2652 18.8946 18.5196 18.7071 18.7071C18.5196 18.8946 18.2652 19 18 19H16C15.7348 19 15.4804 18.8946 15.2929 18.7071C15.1054 18.5196 15 18.2652 15 18V16C15 15.7348 15.1054 15.4804 15.2929 15.2929C15.4804 15.1054 15.7348 15 16 15Z"
                                                stroke="#00D061" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round" />
                                            <path
                                                d="M30 15H32C32.2652 15 32.5196 15.1054 32.7071 15.2929C32.8946 15.4804 33 15.7348 33 16V18C33 18.2652 32.8946 18.5196 32.7071 18.7071C32.5196 18.8946 32.2652 19 32 19H30C29.7348 19 29.4804 18.8946 29.2929 18.7071C29.1054 18.5196 29 18.2652 29 18V16C29 15.7348 29.1054 15.4804 29.2929 15.2929C29.4804 15.1054 29.7348 15 30 15Z"
                                                stroke="#00D061" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round" />
                                            <path
                                                d="M23 15H25C25.2652 15 25.5196 15.1054 25.7071 15.2929C25.8946 15.4804 26 15.7348 26 16V18C26 18.2652 25.8946 18.5196 25.7071 18.7071C25.5196 18.8946 25.2652 19 25 19H23C22.7348 19 22.4804 18.8946 22.2929 18.7071C22.1054 18.5196 22 18.2652 22 18V16C22 15.7348 22.1054 15.4804 22.2929 15.2929C22.4804 15.1054 22.7348 15 23 15Z"
                                                stroke="#00D061" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round" />
                                            <path
                                                d="M16 22H18C18.2652 22 18.5196 22.1054 18.7071 22.2929C18.8946 22.4804 19 22.7348 19 23V25C19 25.2652 18.8946 25.5196 18.7071 25.7071C18.5196 25.8946 18.2652 26 18 26H16C15.7348 26 15.4804 25.8946 15.2929 25.7071C15.1054 25.5196 15 25.2652 15 25V23C15 22.7348 15.1054 22.4804 15.2929 22.2929C15.4804 22.1054 15.7348 22 16 22Z"
                                                stroke="#00D061" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round" />
                                            <path
                                                d="M30 22H32C32.2652 22 32.5196 22.1054 32.7071 22.2929C32.8946 22.4804 33 22.7348 33 23V25C33 25.2652 32.8946 25.5196 32.7071 25.7071C32.5196 25.8946 32.2652 26 32 26H30C29.7348 26 29.4804 25.8946 29.2929 25.7071C29.1054 25.5196 29 25.2652 29 25V23C29 22.7348 29.1054 22.4804 29.2929 22.2929C29.4804 22.1054 29.7348 22 30 22Z"
                                                stroke="#00D061" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round" />
                                            <path
                                                d="M23 22H25C25.2652 22 25.5196 22.1054 25.7071 22.2929C25.8946 22.4804 26 22.7348 26 23V25C26 25.2652 25.8946 25.5196 25.7071 25.7071C25.5196 25.8946 25.2652 26 25 26H23C22.7348 26 22.4804 25.8946 22.2929 25.7071C22.1054 25.5196 22 25.2652 22 25V23C22 22.7348 22.1054 22.4804 22.2929 22.2929C22.4804 22.1054 22.7348 22 23 22Z"
                                                stroke="#00D061" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round" />
                                            <path
                                                d="M23 29H25C25.2652 29 25.5196 29.1054 25.7071 29.2929C25.8946 29.4804 26 29.7348 26 30V32C26 32.2652 25.8946 32.5196 25.7071 32.7071C25.5196 32.8946 25.2652 33 25 33H23C22.7348 33 22.4804 32.8946 22.2929 32.7071C22.1054 32.5196 22 32.2652 22 32V30C22 29.7348 22.1054 29.4804 22.2929 29.2929C22.4804 29.1054 22.7348 29 23 29Z"
                                                stroke="#00D061" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round" />
                                        </g>
                                    </svg>
                                    <h2 className="smith new-chat">Contact Us</h2>
                                </div>
                                <i className="ri-arrow-right-s-line"></i>
                            </div>
                        </Link>
                        <div className="setting-opestion-main setting-opestion-space">
                            <div className="setting-opestion-main-sub">
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                                    <rect opacity="0.08" width="48" height="48" rx="8" fill="#00D061" />
                                    <g>
                                        <path
                                            d="M24 26C25.1046 26 26 25.1046 26 24C26 22.8954 25.1046 22 24 22C22.8954 22 22 22.8954 22 24C22 25.1046 22.8954 26 24 26Z"
                                            stroke="#00D061" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path
                                            d="M34 24C31.333 28.667 28 31 24 31C20 31 16.667 28.667 14 24C16.667 19.333 20 17 24 17C28 17 31.333 19.333 34 24Z"
                                            stroke="#00D061" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </g>
                                </svg>
                                <h2 className="smith new-chat">{isDarkMode ? "Dark Mode" : "Light Mode"}</h2>
                            </div>
                            <div>
                                <div className="dark-mode-toggle">
                                    <label className="switch">
                                        <input
                                            id="toggle"
                                            type="checkbox"
                                            checked={isDarkMode}
                                            onChange={toggleDarkMode}
                                            name="checkbox"
                                        />
                                        <span className="slider round"></span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <Link to="/InviteFriends">
                            <div className="setting-opestion-main setting-opestion-space">
                                <div className="setting-opestion-main-sub">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"
                                        fill="none">
                                        <rect opacity="0.08" width="48" height="48" rx="8" fill="#00D061" />
                                        <g>
                                            <path
                                                d="M21 23C23.2091 23 25 21.2091 25 19C25 16.7909 23.2091 15 21 15C18.7909 15 17 16.7909 17 19C17 21.2091 18.7909 23 21 23Z"
                                                stroke="#00D061" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round" />
                                            <path
                                                d="M15 33V31C15 29.9391 15.4214 28.9217 16.1716 28.1716C16.9217 27.4214 17.9391 27 19 27H23C24.0609 27 25.0783 27.4214 25.8284 28.1716C26.5786 28.9217 27 29.9391 27 31V33"
                                                stroke="#00D061" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round" />
                                            <path d="M28 23H34M31 20V26" stroke="#00D061" strokeWidth="2"
                                                strokeLinecap="round" strokeLinejoin="round" />
                                        </g>
                                    </svg>
                                    <h2 className="smith new-chat">Invite Friends</h2>
                                </div>
                                <i className="ri-arrow-right-s-line"></i>
                            </div>
                        </Link>
                        <Link to="/DeleteDeactivate">
                            <div className="setting-opestion-main setting-opestion-space">
                                <div className="setting-opestion-main-sub">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"
                                        fill="none">
                                        <rect opacity="0.08" width="48" height="48" rx="8" fill="#FF484D" />
                                        <g>
                                            <path d="M22 22L26 26M26 22L22 26" stroke="#FF484D" strokeWidth="2"
                                                strokeLinecap="round" strokeLinejoin="round" />
                                            <path
                                                d="M24 15C31.2 15 33 16.8 33 24C33 31.2 31.2 33 24 33C16.8 33 15 31.2 15 24C15 16.8 16.8 15 24 15Z"
                                                stroke="#FF484D" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round" />
                                        </g>
                                    </svg>
                                    <h2 className="smith new-chat">Delete or Deactivate Account</h2>
                                </div>
                                <i className="ri-arrow-right-s-line"></i>
                            </div>
                        </Link>
                        <Link to="#" className="d-flex align-items-center justify-content-between"
                            data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom">
                            <div className="setting-opestion-main setting-opestion-space border-bottom-0">
                                <div className="setting-opestion-main-sub">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"
                                        fill="none">
                                        <rect opacity="0.08" width="48" height="48" rx="8" fill="#FF484D" />
                                        <g>
                                            <path
                                                d="M26 20V18C26 17.4696 25.7893 16.9609 25.4142 16.5858C25.0391 16.2107 24.5304 16 24 16H17C16.4696 16 15.9609 16.2107 15.5858 16.5858C15.2107 16.9609 15 17.4696 15 18V30C15 30.5304 15.2107 31.0391 15.5858 31.4142C15.9609 31.7893 16.4696 32 17 32H24C24.5304 32 25.0391 31.7893 25.4142 31.4142C25.7893 31.0391 26 30.5304 26 30V28"
                                                stroke="#FF484D" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round" />
                                            <path d="M21 24H33L30 21" stroke="#FF484D" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round" />
                                            <path d="M30 27L33 24" stroke="#FF484D" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round" />
                                        </g>
                                    </svg>
                                    <h2 className="smith new-chat">Logout</h2>
                                </div>
                            </div>
                            <i className="ri-arrow-right-s-line"></i>
                        </Link>
                    </div>
                </div>
                {/* <!-- ====================================== Setting Screen End ===================================== --> */}
                {/* < !-- ====================================== Log Out Screen ===================================== --> */}
                <div className="offcanvas offcanvas-bottom" tabIndex="-1" id="offcanvasBottom">
                    <div className="offcanvas-header d-flex align-items-center justify-content-center">
                        <button type="button" className="text-reset" data-bs-dismiss="offcanvas" aria-label="Close">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="16" viewBox="0 0 24 16" fill="none">
                                <g>
                                    <path d="M22 8L12 13L2 8" stroke="red" strokeWidth="2" strokeLinecap="round"
                                        strokeLinejoin="round" />
                                    <path d="M22 2L12 7L2 2" stroke="red" strokeWidth="2" strokeLinecap="round"
                                        strokeLinejoin="round" />
                                </g>
                            </svg>
                        </button>
                    </div>
                    <div className="offcanvas-body small">
                        <h2 className="logout-text-pop">Logout</h2>
                        <p className="sure-logout">Are you sure you want to log out?</p>
                        <div className="logout-button-main">
                            <button className="logout-cancel" data-bs-dismiss="offcanvas" aria-label="Close">Cancel</button>
                            <Link to="/" className="logout-cancel yes-logot">Yes, Logout</Link>
                        </div>
                    </div>
                </div>
                {/* <!-- ====================================== Pop Up Add Home Screen ===================================== --> */}
                {isVisible && (
                    <div className="popup-container">
                        <div className="backgroundOverlay" onClick={hidePopup}></div>
                        <div className="delayedPopupWindow">
                            <Link to="#" id="btnClose" onClick={hidePopup}>
                                <i className="ri-close-fill"></i>
                            </Link>
                            <div className="formDescription">
                                <img src={logo} alt="logo" />
                                <h3>Aarogya GPT AI Chatbot</h3>
                                <p>Install Aarogya GPT AI Chatbot Multipurpose Mobile App Template to your home screen for easy access,
                                    just like any other app.
                                </p>
                                <div className="home-scrren-main">
                                    <button className="btn-process">
                                        Add Home Screen
                                        <span className="btn-ring"></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}
export default AarogyaGptHome