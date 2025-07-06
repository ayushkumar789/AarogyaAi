import React, { useEffect, useRef, useState } from "react";
import "../assets/css/aarogyachat.css";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

const AarogyaChat = () => {
    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState("");
    const messageContainerRef = useRef(null);
    const messageIndex = useRef(0);

    const fakeBotReplies = [
        "Hey, Ayush! I'm Aarogya 😊",
        "I'm happy to chat with you!",
        "How can I help you today?",
        "That's great to hear!",
        "Have a great day ahead!",
    ];

    // ✅ Detect global dark mode from localStorage
    const [isDarkMode, setIsDarkMode] = useState(() => {
        return localStorage.getItem("darkMode") === "true";
    });

    useEffect(() => {
        setMessages([{ text: fakeBotReplies[0], type: "bot" }]);
        messageIndex.current = 1;
    }, []);

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const scrollToBottom = () => {
        if (messageContainerRef.current) {
            messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;
        }
    };

    const sendMessage = () => {
        if (!inputMessage.trim()) return;

        const newMessage = { text: inputMessage, type: "user" };
        setMessages((prev) => [...prev, newMessage]);
        setInputMessage("");

        setTimeout(() => {
            if (messageIndex.current < fakeBotReplies.length) {
                setMessages((prev) => [
                    ...prev,
                    { text: fakeBotReplies[messageIndex.current], type: "bot" },
                ]);
                messageIndex.current += 1;
            }
        }, 1000);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            sendMessage();
        }
    };

    return (
        <div className={`aarogya-container ${isDarkMode ? "dark-mode" : "light-mode"}`}>

            <div className="aarogya-sidebar">
                <Link to="/AarogyaGptHome">
                    <img className="logo-home" src={logo}/>
                </Link>
                <h2>Aarogya GPT</h2>
                <Link to="/AarogyaChat" className="sidebar-link">• New Chat</Link>
                <Link to="/History" className="sidebar-link">• History</Link>
                <Link to="/AarogyaGptHome" className="sidebar-link">• Settings</Link>
            </div>


            <div className="aarogya-main">
                <div className="aarogya-messages" ref={messageContainerRef}>
                    {messages.map((msg, index) => (
                        <div
                            key={index}
                            className={`aarogya-message ${msg.type === "user" ? "user" : "bot"}`}
                        >
                            {msg.text}
                        </div>
                    ))}
                </div>

                <div className="aarogya-input-area">
                    <textarea
                        className="aarogya-input"
                        placeholder="Write here..."
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        onKeyDown={handleKeyDown}
                    />
                    <button className="aarogya-send" onClick={sendMessage}>
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AarogyaChat;
