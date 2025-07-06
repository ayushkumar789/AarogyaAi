import React, { useEffect, useState } from "react";
import buttonBack from "../assets/images/Button-Back.png"
import logo from "../assets/images/logo.png"
import { Link, useNavigate } from "react-router-dom";
import Loader from "../components/Loader";

const SubscriptionPayment = () => {
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
        navigate("/ConfirmPaymentPin");
    };

    return (
        <>
            <div className="site_content">
                {/* <!-- ====================================== Subscription Screen===================================== --> */}
                <div className="verification-main">
                    <div className="container verify-screen-main p-0">
                        <div className="back-btn back-btn2">
                            <Link onClick={handleBackClick}>
                                <img className="profile-pic" src={buttonBack} alt="Button-Back" />
                            </Link>
                            <h1>Aarogya GPT Plus Subscription</h1>
                        </div>
                        <div className="verify-section-main align-items-stretch">
                            <div className="subscription-aarogya-logo-main">
                                <img className="subscription-aarogya-logo" src={logo} alt="logo" />
                            </div>
                            <h2 className="subscription-text">Aarogya GPT Plus Subscription</h2>
                            <p className="sub-text subscription-date">Subscription Due at 15 Dec 2024</p>
                            <h2 className="twinty-five">$25.00</h2>
                            <p className="sub-text bank-card">Choose a card or bank for payout</p>
                            <div className="down-arrow-main">
                                <div className="choose-card-main">
                                    <span className="payment-type">
                                        <svg width="31" height="19" viewBox="0 0 31 19" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd"
                                                d="M15.0974 16.4389C13.5053 17.7698 11.4401 18.5733 9.1833 18.5733C4.14818 18.5733 0.0664062 14.5737 0.0664062 9.63996C0.0664062 4.70622 4.14818 0.706627 9.1833 0.706627C11.4401 0.706627 13.5053 1.51009 15.0974 2.84102C16.6894 1.51009 18.7547 0.706627 21.0114 0.706627C26.0465 0.706627 30.1283 4.70622 30.1283 9.63996C30.1283 14.5737 26.0465 18.5733 21.0114 18.5733C18.7547 18.5733 16.6894 17.7698 15.0974 16.4389Z"
                                                fill="#ED0006" />
                                            <path fillRule="evenodd" clipRule="evenodd"
                                                d="M15.0957 16.4389C17.0557 14.8004 18.2985 12.3624 18.2985 9.63996C18.2985 6.91754 17.0557 4.47955 15.0957 2.84102C16.6878 1.51009 18.753 0.706627 21.0098 0.706627C26.0449 0.706627 30.1267 4.70622 30.1267 9.63996C30.1267 14.5737 26.0449 18.5733 21.0098 18.5733C18.753 18.5733 16.6878 17.7698 15.0957 16.4389Z"
                                                fill="#F9A000" />
                                        </svg>
                                    </span>
                                    <div className="card-text-america">
                                        <div className="bank-america-text">Master Card</div>
                                        <div className="america-card-number">Card Number **** 7887</div>
                                    </div>
                                </div>
                                <div>
                                    <Link to="#finger-print-modal" data-bs-toggle="modal">
                                        <i className="ri-arrow-down-s-line"></i>
                                    </Link>
                                </div>
                            </div>
                            <div className="promo-code-main">
                                <p className="sub-text bank-card promo-code">Promo Code</p>
                                <div className="new_password_input enter_code">
                                    <div className="form-item">
                                        <input type="number" id="card_number" className="no-spinners" autoComplete="off" required />
                                        <label className="info-person" htmlFor="card_number">Enter Code Here</label>
                                    </div>
                                </div>
                            </div>
                            <div className="print-continue-btn-head">
                                <div className=" bottom-fix-btn onboarding-next-btn" onClick={handleSignIn}>
                                    <Link to="/ConfirmPaymentPin">Proceed to Checkout</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- ====================================== Subscription Screen End===================================== --> */}
                {/* <!-- ====================================== Pop Up Modal ===================================== --> */}
                <div className="modal fade" id="finger-print-modal" tabIndex="-1" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content finger-modal-content">
                            <div className="modal-body">
                                <form>
                                    <h3 className="pop-up-method">Choose Payment Method</h3>
                                    <div className="form-check border-bottom px-0 custom-radio">
                                        <input className="form-check-input-radio" type="radio" name="Payment" id="Payment1"
                                            value="Payment1" />
                                        <div className="form-check-label checkout-modal-lbl-payment">
                                            <span className="payment-type">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                                                    viewBox="0 0 32 32" fill="none">
                                                    <path
                                                        d="M0 28.8H32V32H0V28.8ZM3.2 16H6.4V27.2H3.2V16ZM11.2 16H14.4V27.2H11.2V16ZM17.6 16H20.8V27.2H17.6V16ZM25.6 16H28.8V27.2H25.6V16ZM0 8L16 0L32 8V14.4H0V8ZM16 9.6C16.8837 9.6 17.6 8.88365 17.6 8C17.6 7.11635 16.8837 6.4 16 6.4C15.1163 6.4 14.4 7.11635 14.4 8C14.4 8.88365 15.1163 9.6 16 9.6Z"
                                                        fill="#00D061" />
                                                </svg>
                                            </span>
                                            <div className="card-text-america">
                                                <div className="bank-america-text">Bank of America</div>
                                                <div className="america-card-number"><span className="america-card-active">Active </span>
                                                    | Card Number **** 4625</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-check border-bottom px-0 custom-radio">
                                        <input className="form-check-input-radio" type="radio" name="Payment" id="Payment2" defaultChecked />
                                        <div className="form-check-label checkout-modal-lbl-payment">
                                            <span className="payment-type">
                                                <svg width="31" height="19" viewBox="0 0 31 19" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd"
                                                        d="M15.0974 16.4389C13.5053 17.7698 11.4401 18.5733 9.1833 18.5733C4.14818 18.5733 0.0664062 14.5737 0.0664062 9.63996C0.0664062 4.70622 4.14818 0.706627 9.1833 0.706627C11.4401 0.706627 13.5053 1.51009 15.0974 2.84102C16.6894 1.51009 18.7547 0.706627 21.0114 0.706627C26.0465 0.706627 30.1283 4.70622 30.1283 9.63996C30.1283 14.5737 26.0465 18.5733 21.0114 18.5733C18.7547 18.5733 16.6894 17.7698 15.0974 16.4389Z"
                                                        fill="#ED0006" />
                                                    <path fillRule="evenodd" clipRule="evenodd"
                                                        d="M15.0957 16.4389C17.0557 14.8004 18.2985 12.3624 18.2985 9.63996C18.2985 6.91754 17.0557 4.47955 15.0957 2.84102C16.6878 1.51009 18.753 0.706627 21.0098 0.706627C26.0449 0.706627 30.1267 4.70622 30.1267 9.63996C30.1267 14.5737 26.0449 18.5733 21.0098 18.5733C18.753 18.5733 16.6878 17.7698 15.0957 16.4389Z"
                                                        fill="#F9A000" />
                                                </svg>
                                            </span>
                                            <div className="card-text-america">
                                                <div className="bank-america-text">Master Card</div>
                                                <div className="america-card-number"><span className="america-card-active">Active </span>
                                                    | Card Number **** 7887</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-check border-bottom px-0 custom-radio">
                                        <input className="form-check-input-radio" type="radio" name="Payment" />
                                        <div className="form-check-label checkout-modal-lbl-payment">
                                            <span className="payment-type">
                                                <svg className="visa" width="33" height="12" viewBox="0 0 33 12" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd"
                                                        d="M8.44956 11.1443H5.68016L3.60344 3.05649C3.50487 2.68445 3.29558 2.35555 2.98772 2.20053C2.21942 1.81097 1.3728 1.50093 0.449219 1.34457V1.03319H4.9105C5.52623 1.03319 5.98802 1.50093 6.06498 2.04417L7.1425 7.87819L9.91055 1.03319H12.603L8.44956 11.1443ZM14.1409 11.1443H11.5254L13.6791 1.03319H16.2945L14.1409 11.1443ZM19.6795 3.83429C19.7565 3.28971 20.2183 2.97833 20.7571 2.97833C21.6037 2.90014 22.5259 3.05651 23.2956 3.44472L23.7574 1.26775C22.9877 0.956368 22.1411 0.800003 21.3728 0.800003C18.8343 0.800003 16.9871 2.20055 16.9871 4.14432C16.9871 5.62305 18.2955 6.39948 19.2191 6.86723C20.2183 7.33362 20.6031 7.64501 20.5262 8.1114C20.5262 8.811 19.7565 9.12238 18.9882 9.12238C18.0646 9.12238 17.141 8.88918 16.2958 8.49962L15.834 10.6779C16.7576 11.0662 17.7568 11.2225 18.6803 11.2225C21.5267 11.2994 23.2956 9.90016 23.2956 7.80002C23.2956 5.1553 19.6795 5.00028 19.6795 3.83429ZM32.4472 11.1443L30.3705 1.03319H28.1399C27.6781 1.03319 27.2163 1.34457 27.0624 1.81097L23.2168 11.1443H25.9092L26.4466 9.66695H29.7548L30.0627 11.1443H32.4472ZM28.528 3.75611L29.2963 7.56683H27.1426L28.528 3.75611Z" />
                                                </svg>
                                            </span>
                                            <div className="card-text-america">
                                                <div className="bank-america-text">Visa</div>
                                                <div className="america-card-number"><span
                                                    className="america-card-inactive">Inactive </span>
                                                    | Card Number **** 2540</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-check border-bottom px-0 custom-radio">
                                        <input className="form-check-input-radio" type="radio" name="Payment" id="Payment4"
                                            value="Payment4" />
                                        <div className="form-check-label checkout-modal-lbl-payment">
                                            <span className="payment-type">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                                                    viewBox="0 0 32 32" fill="none">
                                                    <path
                                                        d="M0 28.8H32V32H0V28.8ZM3.2 16H6.4V27.2H3.2V16ZM11.2 16H14.4V27.2H11.2V16ZM17.6 16H20.8V27.2H17.6V16ZM25.6 16H28.8V27.2H25.6V16ZM0 8L16 0L32 8V14.4H0V8ZM16 9.6C16.8837 9.6 17.6 8.88365 17.6 8C17.6 7.11635 16.8837 6.4 16 6.4C15.1163 6.4 14.4 7.11635 14.4 8C14.4 8.88365 15.1163 9.6 16 9.6Z"
                                                        fill="#00D061" />
                                                </svg>
                                            </span>
                                            <div className="card-text-america">
                                                <div className="bank-america-text">JPMorgan Bank</div>
                                                <div className="america-card-number"><span className="america-card-active">Active </span>
                                                    | Card Number **** 4625</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-check border-bottom px-0 custom-radio">
                                        <input className="form-check-input-radio" type="radio" name="Payment" />
                                        <div className="form-check-label checkout-modal-lbl-payment">
                                            <span className="payment-type">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="32"
                                                    viewBox="0 0 27 32" fill="none">
                                                    <path fillRule="evenodd" clipRule="evenodd"
                                                        d="M7.51617 30.9154L8.05722 27.3929L6.85197 27.3641H1.09668L5.0964 1.37019C5.10886 1.29148 5.14914 1.21841 5.20797 1.16643C5.26709 1.11445 5.34244 1.08594 5.42126 1.08594H15.1256C18.3475 1.08594 20.5708 1.77297 21.7314 3.1292C22.2756 3.76544 22.6222 4.43048 22.79 5.16207C22.9659 5.92989 22.9688 6.84711 22.7972 7.96602L22.7848 8.04741V8.76444L23.329 9.08047C23.7872 9.32968 24.1514 9.61483 24.4308 9.94126C24.8962 10.4854 25.1973 11.1769 25.3245 11.9964C25.4561 12.8394 25.4126 13.8427 25.1973 14.9786C24.949 16.2849 24.5476 17.4228 24.0054 18.3537C23.5069 19.2115 22.8717 19.9232 22.1174 20.4745C21.3973 20.9985 20.5418 21.3962 19.5745 21.6507C18.637 21.9008 17.5682 22.0271 16.396 22.0271H15.6408C15.1009 22.0271 14.5764 22.2264 14.1646 22.5837C13.7516 22.9485 13.4787 23.4469 13.3949 23.9919L13.3378 24.3092L12.3818 30.518L12.3386 30.7458C12.327 30.818 12.3073 30.8539 12.2783 30.8782C12.2525 30.9005 12.2155 30.9154 12.1792 30.9154H7.51617Z"
                                                        fill="#28356A" />
                                                    <path fillRule="evenodd" clipRule="evenodd"
                                                        d="M23.845 8.13013C23.8163 8.31993 23.7829 8.51389 23.7459 8.71319C22.4661 15.448 18.0876 17.7747 12.4958 17.7747H9.64858C8.96466 17.7747 8.38827 18.2835 8.28191 18.9749L6.4113 31.1368C6.34204 31.591 6.68341 32 7.13027 32H12.1802C12.7781 32 13.2861 31.5547 13.3802 30.9503L13.4298 30.6874L14.3806 24.503L14.4418 24.1637C14.5348 23.5572 15.0439 23.1117 15.6418 23.1117H16.397C21.2896 23.1117 25.1198 21.0758 26.2392 15.184C26.7067 12.7228 26.4647 10.6676 25.2273 9.2223C24.8529 8.78656 24.3883 8.42478 23.845 8.13013Z"
                                                        fill="#298FC2" />
                                                    <path fillRule="evenodd" clipRule="evenodd"
                                                        d="M22.5067 7.5831C22.3111 7.52458 22.1094 7.47171 21.9025 7.42389C21.6944 7.37725 21.4814 7.33597 21.2621 7.29973C20.4944 7.1726 19.6531 7.1123 18.7522 7.1123H11.146C10.9585 7.1123 10.7805 7.15567 10.6214 7.23409C10.2705 7.40696 10.01 7.74735 9.9468 8.16408L8.32859 18.6688L8.28223 18.975C8.38858 18.2836 8.96498 17.7747 9.64889 17.7747H12.4961C18.088 17.7747 22.4664 15.4469 23.7462 8.71329C23.7844 8.51398 23.8166 8.32002 23.8453 8.13022C23.5216 7.95408 23.1709 7.80349 22.7933 7.67517C22.7 7.64339 22.6038 7.6128 22.5067 7.5831Z"
                                                        fill="#22284F" />
                                                    <path fillRule="evenodd" clipRule="evenodd"
                                                        d="M9.94648 8.16414C10.0097 7.74741 10.2702 7.40701 10.6211 7.23533C10.7814 7.15662 10.9581 7.11325 11.1456 7.11325H18.7518C19.6528 7.11325 20.4941 7.17384 21.2617 7.30097C21.4811 7.33691 21.6941 7.3785 21.9022 7.42513C22.1091 7.47265 22.3108 7.52582 22.5064 7.58404C22.6035 7.61374 22.6997 7.64463 22.7939 7.67523C23.1715 7.80354 23.5224 7.95533 23.8461 8.13028C24.2269 5.64147 23.8429 3.94692 22.5302 2.41247C21.0826 0.722969 18.4705 0 15.1277 0H5.4231C4.74035 0 4.15786 0.508811 4.05238 1.20148L0.0103445 27.4627C-0.0693486 27.9822 0.321582 28.4509 0.832777 28.4509H6.82396L9.94648 8.16414Z"
                                                        fill="#28356A" />
                                                </svg>
                                            </span>
                                            <div className="card-text-america">
                                                <div className="bank-america-text">PayPal</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-check border-bottom-0 px-0 custom-radio">
                                        <input className="form-check-input-radio" type="radio" name="Payment" id="Payment3" />
                                        <div className="form-check-label checkout-modal-lbl-payment">
                                            <span className="payment-type payment-type2">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="52" height="32"
                                                    viewBox="0 0 52 32" fill="none">
                                                    <path fillRule="evenodd" clipRule="evenodd"
                                                        d="M46.6206 25.6578C40.9737 29.7984 32.7876 32 25.7376 32C15.8574 32 6.96046 28.3712 0.228368 22.3315C-0.300113 21.8571 0.170691 21.2094 0.806477 21.5772C8.06973 25.7765 17.0526 28.3059 26.3305 28.3059C32.5891 28.3059 39.4687 27.0158 45.7998 24.3478C46.7534 23.944 47.5542 24.9715 46.6206 25.6578ZM48.9693 22.9925C49.6923 23.9121 48.1658 27.6982 47.4845 29.3893C47.2779 29.9011 47.7205 30.1076 48.1873 29.7198C51.216 27.2024 51.9993 21.9264 51.3796 21.1641C50.764 20.4085 45.4684 19.7581 42.2359 22.013C41.7382 22.3595 41.8241 22.8393 42.3754 22.7726C44.1955 22.5567 48.2477 22.073 48.9693 22.9925Z"
                                                        fill="#FF9900" />
                                                    <path className="apple-pay" fillRule="evenodd" clipRule="evenodd"
                                                        d="M40.7898 16.2132L46.6675 1.34993C46.7909 1.04875 46.8539 0.836855 46.8539 0.712917C46.8539 0.501023 46.7292 0.394409 46.4797 0.394409H44.9841C44.6984 0.394409 44.504 0.43972 44.3953 0.527676C44.288 0.616965 44.182 0.811534 44.0747 1.11272L40.4679 11.4102L36.7283 1.11272C36.621 0.811534 36.515 0.616965 36.4077 0.527676C36.3004 0.43972 36.1046 0.394409 35.8189 0.394409H34.216C33.9665 0.394409 33.8418 0.501023 33.8418 0.712917C33.8418 0.836855 33.9035 1.04875 34.0282 1.34993L39.1843 13.9836L38.6773 15.3376C38.3741 16.1878 38.0361 16.7716 37.6619 17.0901C37.2876 17.4086 36.7619 17.5672 36.0858 17.5672C35.7827 17.5672 35.5426 17.5485 35.3655 17.5139C35.1871 17.4792 35.053 17.4605 34.9645 17.4605C34.6976 17.4605 34.5634 17.6285 34.5634 17.9643V18.6546C34.5634 18.9025 34.6077 19.0837 34.6976 19.1983C34.7861 19.313 34.9283 19.3982 35.1254 19.4502C35.5694 19.5728 36.0778 19.6368 36.6478 19.6368C37.6632 19.6368 38.4868 19.3716 39.1185 18.8399C39.753 18.3108 40.3096 17.4339 40.7898 16.2132Z"
                                                        fill="#232F3E" />
                                                    <path className="apple-pay" fillRule="evenodd" clipRule="evenodd"
                                                        d="M18.8491 4.04731C18.5903 3.18907 18.2214 2.45877 17.7399 1.85774C17.2597 1.25671 16.6722 0.795603 15.9774 0.477095C15.2839 0.158587 14.5086 0 13.6529 0C12.8521 0 12.0674 0.149259 11.3029 0.450442C10.537 0.751624 9.81533 1.19407 9.13796 1.77778L9.00517 0.927537C8.95152 0.57438 8.7463 0.397135 8.38951 0.397135H7.21451C6.85906 0.397135 6.68066 0.57438 6.68066 0.927537V18.7906C6.68066 19.1451 6.85906 19.321 7.21451 19.321H8.79056C9.14735 19.321 9.32441 19.1438 9.32441 18.7906V12.5804C10.482 13.6239 11.8622 14.1463 13.4651 14.1463C14.3369 14.1463 15.1296 13.973 15.8419 13.6292C16.5541 13.284 17.1591 12.8016 17.658 12.1819C18.157 11.5636 18.5446 10.8119 18.8196 9.92571C19.0959 9.04082 19.2341 8.04931 19.2341 6.95253C19.2368 5.8744 19.1067 4.90555 18.8491 4.04731ZM12.8521 12.022C11.6395 12.022 10.4645 11.5982 9.32575 10.748V3.34366C10.4471 2.5294 11.6409 2.12294 12.9057 2.12294C15.3282 2.12294 16.5394 3.77811 16.5394 7.08579C16.538 10.3775 15.3094 12.022 12.8521 12.022Z"
                                                        fill="#232F3E" />
                                                    <path className="apple-pay" fillRule="evenodd" clipRule="evenodd"
                                                        d="M30.8988 1.04221C30.0967 0.353217 28.8506 0.00805664 27.1592 0.00805664C26.3222 0.00805664 25.4852 0.0840187 24.6482 0.233277C23.8099 0.383869 23.1071 0.582436 22.537 0.830312C22.3237 0.919601 22.1802 1.01156 22.1091 1.10884C22.038 1.20612 22.0018 1.37937 22.0018 1.62591V2.34156C22.0018 2.66006 22.1172 2.81998 22.3492 2.81998C22.4203 2.81998 22.4968 2.80666 22.5773 2.78C22.6577 2.75335 22.7248 2.73203 22.7771 2.71337C24.1493 2.30691 25.4571 2.10301 26.7045 2.10301C27.7722 2.10301 28.5206 2.29758 28.9485 2.68805C29.3764 3.07719 29.5897 3.74885 29.5897 4.70438V6.4555C28.3436 6.15432 27.2209 6.00506 26.223 6.00506C24.6563 6.00506 23.4102 6.3902 22.4834 7.15915C21.5578 7.9281 21.0938 8.95958 21.0938 10.2509C21.0938 11.4557 21.468 12.4139 22.2164 13.1308C22.9636 13.8478 23.9789 14.205 25.2612 14.205C26.0271 14.205 26.797 14.0544 27.5723 13.7545C28.3476 13.4547 29.0545 13.0282 29.6956 12.4805L29.8298 13.3561C29.8834 13.6919 30.0793 13.8598 30.4186 13.8598H31.5668C31.9222 13.8598 32.102 13.6826 32.102 13.3294V4.25393C32.1006 2.80266 31.6996 1.73253 30.8988 1.04221ZM29.5897 10.864C29.0022 11.3064 28.3879 11.6422 27.7467 11.8728C27.1055 12.1033 26.4912 12.218 25.9037 12.218C25.2089 12.218 24.6751 12.0367 24.3008 11.6742C23.9266 11.3117 23.7402 10.7947 23.7402 10.1217C23.7402 8.58244 24.7462 7.81216 26.7581 7.81216C27.2209 7.81216 27.6971 7.84414 28.1867 7.90544C28.6762 7.96808 29.1444 8.05204 29.5897 8.15732V10.864Z"
                                                        fill="#232F3E" />
                                                </svg>
                                            </span>
                                            <div className="card-text-america">
                                                <div className="bank-america-text">Amazon Pay</div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SubscriptionPayment