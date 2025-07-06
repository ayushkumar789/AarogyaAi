import React, { useEffect, useState } from "react";
import buttonBack from "../assets/images/Button-Back.png";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../components/Loader";

const faqsData = [
    {
        title: "General",
        questions: [
            {
                q: "What is Aarogya GPT?",
                a: "Aarogya GPT is an AI-powered multilingual mental health assistant designed to offer supportive conversations, guidance, and self-help tips in a safe, private, and culturally inclusive manner."
            },
            {
                q: "How to use Aarogya GPT?",
                a: "Simply open the app and start chatting. No login or personal details required. Just type your thoughts, and Aarogya GPT will respond with empathy and care."
            },
            {
                q: "Is Aarogya GPT free to use?",
                a: "Yes, Aarogya GPT is completely free for all users. Our mission is to make mental health support accessible to everyone, without barriers."
            },
            {
                q: "How can I delete my account?",
                a: "We do not store personal accounts or login credentials. If you're using our services anonymously, there’s no data saved to delete."
            }
        ]
    },
    {
        title: "Messaging Aarogya GPT",
        questions: [
            {
                q: "How do I start a chat?",
                a: "Just open the chat screen and begin typing your message. Aarogya GPT responds in real-time, understanding multiple languages."
            },
            {
                q: "Can I message in my local language?",
                a: "Absolutely. Aarogya GPT supports Hindi, Telugu, Tamil, Bengali, and more, with tailored responses in your preferred language."
            },
            {
                q: "Is my chat data safe?",
                a: "Yes. All conversations are private and not stored or shared. We prioritize your confidentiality and emotional safety."
            }
        ]
    },
    {
        title: "Ending the Chat",
        questions: [
            {
                q: "How do I end a chat with Aarogya GPT?",
                a: "You can simply close the app or navigate away from the chat screen. There’s no logout needed."
            },
            {
                q: "Will the bot remember my past chats?",
                a: "No, Aarogya GPT does not store previous conversations to protect your privacy. Each session is fresh and secure."
            }
        ]
    },
    {
        title: "Chat History and Data",
        questions: [
            {
                q: "Can I export my chat conversations?",
                a: "Currently, exporting chat is not supported to maintain anonymity. We may add this feature with strict user consent in future updates."
            },
            {
                q: "Can I clear my conversation manually?",
                a: "Yes, you can refresh the page or restart the app. Since no data is stored, this clears the session instantly."
            }
        ]
    }
];

const Faq = () => {
    const [openGroupIndex, setOpenGroupIndex] = useState(null);
    const [openQuestionKey, setOpenQuestionKey] = useState(null);

    const toggleGroup = (groupIndex) => {
        setOpenGroupIndex((prev) => (prev === groupIndex ? null : groupIndex));
        setOpenQuestionKey(null);
    };

    const toggleQuestion = (groupIndex, questionIndex) => {
        const key = `${groupIndex}-${questionIndex}`;
        setOpenQuestionKey((prev) => (prev === key ? null : key));
    };

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
                <div className="verification-main">
                    <div className="container verify-screen-main p-0">
                        <div className="back-btn back-btn2">
                            <Link onClick={handleBackClick}>
                                <img className="profile-pic" src={buttonBack} alt="Button-Back" />
                            </Link>
                            <h1>FAQs</h1>
                            <h2 className="d-none">hidden</h2>
                        </div>
                        <div className="verify-section-main align-items-stretch">
                            <section id="faq-sec">
                                {faqsData.map((group, groupIndex) => {
                                    const isGroupOpen = openGroupIndex === groupIndex;
                                    return (
                                        <div className="nested-accordion" key={groupIndex}>
                                            <h3
                                                className={`boder-top ${isGroupOpen ? "selected" : ""}`}
                                                onClick={() => toggleGroup(groupIndex)}
                                            >
                                                {group.title}
                                            </h3>
                                            <div className={`comment ${isGroupOpen ? "visible" : "hidden"}`}>
                                                {group.questions.map((item, questionIndex) => {
                                                    const key = `${groupIndex}-${questionIndex}`;
                                                    const isQuestionOpen = openQuestionKey === key;

                                                    return (
                                                        <div className="nested-accordion" key={questionIndex}>
                                                            <h3
                                                                className={`faq-txt1 ${isQuestionOpen ? "selected" : ""}`}
                                                                onClick={() => toggleQuestion(groupIndex, questionIndex)}
                                                            >
                                                                {item.q}
                                                            </h3>
                                                            <div className={`comment ${isQuestionOpen ? "visible" : "hidden"}`}>
                                                                {item.a}
                                                            </div>
                                                        </div>
                                                    );
                                                })}
                                                <div className="boder-top1"></div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Faq;
