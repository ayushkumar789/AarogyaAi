import React, { useEffect, useState } from "react";
import buttonBack from "../assets/images/Button-Back.png"
import { Link, useNavigate } from "react-router-dom";
import Loader from "../components/Loader";

const CancelSubscription = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    const handleBackClick = () => {
        navigate(-1);
    };
    const handleSignIn = () => {
        navigate("/PlusSubscription");
    };

    // page loader
    useEffect(() => {
        setTimeout(() => setLoading(false), 500);
    }, []);

    if (loading) {
        return <Loader />;
    }
    return (
        <>
            <div className="site_content">
                {/* <!-- ====================================== Cancel Subscription Screen ===================================== --> */}
                <div className="verification-main">
                    <div className="container verify-screen-main p-0">
                        <div className="back-btn back-btn2">
                            <Link onClick={handleBackClick}>
                                <img className="profile-pic" src={buttonBack} alt="Button-Back" />
                            </Link>
                            <h1>Aarogya GPT Plus Subscription</h1>
                        </div>
                        <div className="verify-section-main align-items-stretch">
                            <div className="main-text-group">
                                <h2 className="hey-ayush gpt-plus">Aarogya GPT Plus</h2>
                                <div className="premium-features-main">
                                    <div>
                                        <svg className="premium-svg" xmlns="http://www.w3.org/2000/svg" width="30" height="30"
                                            viewBox="0 0 30 30" fill="none">
                                            <mask id="mask0_3_4136" maskUnits="userSpaceOnUse" x="0"
                                                y="0" width="30" height="30">
                                                <path d="M0 0H30V30H0V0Z" fill="white" />
                                            </mask>
                                            <g mask="url(#mask0_3_4136)">
                                                <path d="M16.25 3.75V12.5H23.75L13.75 26.25V17.5H6.25L16.25 3.75Z"
                                                    stroke="#FF484D" stroke-width="3" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                            </g>
                                        </svg>
                                    </div>
                                    <div>
                                        <h3>Premium Features</h3>
                                        <p className="sub-text access">Plus subscribers have access to Aarogya GPT Pro and our latest
                                            beta features.</p>
                                    </div>
                                </div>
                                <div className="premium-features-main">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"
                                            fill="none">
                                            <mask id="mask0_3_4130" maskUnits="userSpaceOnUse" x="0"
                                                y="0" width="30" height="30">
                                                <path d="M0 0H30V30H0V0Z" fill="white" />
                                            </mask>
                                            <g mask="url(#mask0_3_4130)">
                                                <path
                                                    d="M15 15C17.5 11.3 15 6.25 13.75 5C13.75 8.7975 11.5337 10.9263 10 12.5C8.4675 14.075 7.5 16.55 7.5 18.75C7.5 20.7391 8.29018 22.6468 9.6967 24.0533C11.1032 25.4598 13.0109 26.25 15 26.25C16.9891 26.25 18.8968 25.4598 20.3033 24.0533C21.7098 22.6468 22.5 20.7391 22.5 18.75C22.5 16.835 21.18 13.825 20 12.5C17.7675 16.25 16.5112 16.25 15 15Z"
                                                    stroke="#FF484D" stroke-width="3" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                            </g>
                                        </svg>
                                    </div>
                                    <div>
                                        <h3>Priority Access</h3>
                                        <p className="sub-text access">You’ll be able to use Aarogya GPT even when demand is high.</p>
                                    </div>
                                </div>
                                <div className="premium-features-main">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"
                                            fill="none">
                                            <mask id="mask0_3_4122" maskUnits="userSpaceOnUse" x="0"
                                                y="0" width="30" height="30">
                                                <path d="M0 0H30V30H0V0Z" fill="white" />
                                            </mask>
                                            <g mask="url(#mask0_3_4122)">
                                                <path
                                                    d="M7.04501 24.205C5.47168 22.6317 4.40023 20.6271 3.96616 18.4448C3.53209 16.2626 3.75488 14.0006 4.60637 11.9449C5.45786 9.88924 6.8998 8.13224 8.74985 6.89608C10.5999 5.65992 12.775 5.00012 15 5.00012C17.225 5.00012 19.4001 5.65992 21.2502 6.89608C23.1002 8.13224 24.5421 9.88924 25.3936 11.9449C26.2451 14.0006 26.4679 16.2626 26.0338 18.4448C25.5998 20.6271 24.5283 22.6317 22.955 24.205"
                                                    stroke="#FF484D" stroke-width="3" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                                <path d="M20 11.25L15 16.25" stroke="#FF484D" stroke-width="3"
                                                    stroke-linecap="round" stroke-linejoin="round" />
                                            </g>
                                        </svg>
                                    </div>
                                    <div>
                                        <h3>Ultra Fast</h3>
                                        <p className="sub-text access">Enjoy even faster response speeds when using Aarogya GPT Pro.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="print-continue-btn-head">
                                <div className="block-footer until-canceled resend-otp">
                                    <p> Auto-renews for $25/month until canceled. Due date is 15 Dec 2024 </p>
                                </div>
                                <div className="onboarding-next-btn-Subscribe bottom-fix-btn"
                                    onClick={handleSignIn}>
                                    <Link to="/PlusSubscription">Cancel My Subscription</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- ====================================== Cancel Subscription Screen End===================================== --> */}
            </div>
        </>
    )
}
export default CancelSubscription   