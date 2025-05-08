import React, { useState } from "react";
import axios from "axios";

const ChatBot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const sendMessage = async () => {
        if (!input.trim()) return;

        const userMessage = { sender: "user", text: input };
        setMessages(prevMessages => [...prevMessages, userMessage]);
        setInput("");
        setIsLoading(true);

        // Expanded Custom Responses for Greetings, Beauty Products, and Delivery
        const customResponses = {
            "beauty tips": "✨ Always cleanse, tone, and moisturize! SPF is your skin’s best friend. 🧴",
            "makeup suggestions": "Try warm-toned eyeshadows for a bold look! 🎨💄",
            "skincare routine": "🧖‍♀️ Cleanse, exfoliate weekly, use serum, moisturize, and apply SPF daily!",
            "delivery": "🚚 Yes! We offer **free delivery** within Kenya on orders above Ksh 2000!",
            "location": "📍 Our **physical store** is in Nairobi near Archives!",
            "foundation shade": "👩‍🎨 Match foundation to your **jawline**, not your wrist!",
            "lipstick suggestions": "💋 Try nude shades for a classy look or bold reds for a statement!"
        };

        // Greeting Keywords
        const greetings = ["hello", "hi", "hey", "good morning", "good evening", "good afternoon"];
        const lowerCaseInput = input.toLowerCase();

        // Check greetings dynamically
        if (greetings.some(greeting => lowerCaseInput.includes(greeting))) {
            const botMessage = { sender: "bot", text: "Hi there! 😊 How can I assist you today?" };
            setMessages(prevMessages => [...prevMessages, botMessage]);
            setIsLoading(false);
            return;
        }
        const beautyKeywords = ["beauty", "makeup", "skincare", "foundation", "lipstick"];
        if (beautyKeywords.some(keyword => lowerCaseInput.includes(keyword))) {
            const botMessage = { sender: "bot", text: "💄 Are you looking for skincare, makeup, or haircare suggestions?" };
            setMessages(prevMessages => [...prevMessages, botMessage]);
            setIsLoading(false);
            return;
        }

        const Delivery = ["Delivery", "shipping", "delivered", "shipment", "deliveries"];
        if (beautyKeywords.some(keyword => lowerCaseInput.includes(keyword))) {
            const botMessage = { sender: "bot", text: "We do offer delivery services wuthin the country" };
            setMessages(prevMessages => [...prevMessages, botMessage]);
            setIsLoading(false);
            return;
        }

        // Check for other beauty-related keywords dynamically
        for (let keyword in customResponses) {
            if (lowerCaseInput.includes(keyword)) {
                const botMessage = { sender: "bot", text: customResponses[keyword] };
                setMessages(prevMessages => [...prevMessages, botMessage]);
                setIsLoading(false);
                return;
            }
        }
        // General Beauty Detection (checks if the input contains beauty-related words)

        // AI Chatbot Response (fallback when no predefined response is found)
        try {
            const response = await axios.post("http://localhost:5000/chat", { message: input });
            const botMessage = { sender: "bot", text: response.data.response };
            setMessages(prevMessages => [...prevMessages, botMessage]);
        } catch (error) {
            console.error("Error communicating with chatbot", error);
            const errorMessage = { sender: "bot", text: "Oops! Something went wrong. Try again later." };
            setMessages(prevMessages => [...prevMessages, errorMessage]);
        }

        setIsLoading(false);
    };

    return (
        <div style={{ backgroundColor: "pink", padding: "20px", borderRadius: "10px", maxWidth: "400px", margin: "auto", boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)" }}>
            <h2 style={{ textAlign: "center", color: "black" }}>Beauty ChatBot 💄</h2>
            <div style={{ backgroundColor: "white", padding: "10px", borderRadius: "8px", minHeight: "200px" }}>
                {messages.map((msg, index) => (
                    <p key={index} style={{ textAlign: msg.sender === "user" ? "right" : "left", color: "black" }}>
                        <strong>{msg.sender === "user" ? "You: " : "Bot: "}</strong>{msg.text}
                    </p>
                ))}
                {isLoading && <p style={{ textAlign: "center", color: "black" }}>💬 Bot is typing...</p>}
            </div>

            <div style={{ marginTop: "10px" }}>
                <input 
                    type="text" 
                    value={input} 
                    onChange={(e) => setInput(e.target.value)} 
                    placeholder="Ask me anything about beauty..." 
                    style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "none" }}
                />
                <button onClick={sendMessage} style={{ backgroundColor: "pink", color: "black", border: "none", padding: "10px", width: "100%", borderRadius: "5px", marginTop: "5px" }}>
                    Send
                </button>
            </div>
        </div>
    );
};

export default ChatBot;
