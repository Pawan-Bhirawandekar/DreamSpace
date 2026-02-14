import React, { useEffect, useState, useRef } from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Link, Route, Routes, useLocation } from "react-router";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import GenerateImage from "./components/GenerateImage/generateImage";
import BudgetHomePage from "./components/Budget/BudgetHomePage";
import BedroomDesign from "./components/Budget/Bedroom/Bedroom";
import BalconyDesign from "./components/Budget/Balcony/Balcony";
import LivingroomDesign from "./components/Budget/Livingroom/Livingroom";
import KitchenDesign from "./components/Budget/Kitchen/Kitchen";
import CustomDesign from "./components/Budget/CustomDesign/CustomDesign";

// import { useEffect, useState, useRef } from 'react'
import Chatboticon from "./components/Chatbot/Chatboticon";
import Chatform from "./components/Chatbot/Chatform";
import Chatmessage from "./components/Chatbot/Chatmessage";
import companyInfo from "../src/comanyInfo";
import Vaastu from "./components/Vaastu/Vaastu";
import AIImageGeneration from "./components/AIGeneration/aiGeneration";

const API = import.meta.env.VITE_API_URL;
console.log("AI API URL: ", API);

const App = () => {
  const path = useLocation();

  const homeRef = useRef(null);
  const scrollTo = (position) => {
    console.log("funcion");
    console.log(homeRef.current.scrollTop);
    homeRef.current.scrollTop = 700;
    if (homeRef.current) {
    }
  };
  // Chatbot
  const [chatHistory, setChatHistory] = useState([
    {
      hideInChat: true,
      role: "model",
      text: companyInfo,
    },
  ]);
  const [showChatbot, setShowChatbot] = useState(false);
  const chatBodyRef = useRef();

  const generateBotResponse = async (history) => {
    const updateHistory = (text, isError = false) => {
      setChatHistory((prev) => [
        ...prev.filter((msg) => msg.text !== "Thinking..."),
        { role: "model", text, isError },
      ]);
    };

    history = history.map(({ role, text }) => ({ role, parts: [{ text }] }));

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ contents: history }),
    };
    try {
      //make the api call to get the bot's response
      const response = await fetch(
        import.meta.env.VITE_API_URL,
        requestOptions
      );
      console.log(response);
      const data = await response.json();
      if (!response.ok)
        throw new Error(data.error.message || "Something went wrong!");
      //clean and update chat history with bot's response
      const apiResponseText = data.candidates[0].content.parts[0].text
        .replace(/\*\*(.*?)\*\*/g, "$1")
        .trim();
      updateHistory(apiResponseText);
    } catch (error) {
      updateHistory(error.message, true);
    }
  };

  useEffect(() => {
    //Auto-scroll whenever chat history updates
    chatBodyRef.current.scrollTo({
      top: chatBodyRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [chatHistory]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home homeRef={homeRef} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/budget">
          {/* Home page with design options */}
          <Route index element={<BudgetHomePage />} />

          {/* Individual design pages with Back button */}
          <Route
            path="bedroom"
            element={
              <div className="design-page">
                <div className="back-button-container">
                  <Link to="/budget">
                    <button className="back-button">
                      Back to Design Options
                    </button>
                  </Link>
                </div>
                <div className="design-content">
                  <BedroomDesign />
                </div>
              </div>
            }
          />
          <Route
            path="balcony"
            element={
              <div className="design-page">
                <div className="back-button-container">
                  <Link to="/budget">
                    <button className="back-button">
                      Back to Design Options
                    </button>
                  </Link>
                </div>
                <div className="design-content">
                  <BalconyDesign />
                </div>
              </div>
            }
          />
          <Route
            path="livingroom"
            element={
              <div className="design-page">
                <div className="back-button-container">
                  <Link to="/budget">
                    <button className="back-button">
                      Back to Design Options
                    </button>
                  </Link>
                </div>
                <div className="design-content">
                  <LivingroomDesign />
                </div>
              </div>
            }
          />
          <Route
            path="kitchen"
            element={
              <div className="design-page">
                <div className="back-button-container">
                  <Link to="/budget">
                    <button className="back-button">
                      Back to Design Options
                    </button>
                  </Link>
                </div>
                <div className="design-content">
                  <KitchenDesign />
                </div>
              </div>
            }
          />
          <Route
            path="CustomDesign"
            element={
              <div className="design-page">
                <div className="back-button-container">
                  <Link to="/budget">
                    <button className="back-button">
                      Back to Design Options
                    </button>
                  </Link>
                </div>
                <div className="design-content">
                  <CustomDesign />
                </div>
              </div>
            }
          />
        </Route>
        <Route path="/generateImage" element={<GenerateImage />} />
        <Route path="/vaastu" element={<Vaastu />} />
        <Route path="/aiGeneration" element={<AIImageGeneration />} />
      </Routes>

      {/* ChatBot */}
      <div className={`bot-container ${showChatbot ? "show-chatbot" : ""}`}>
        <button
          onClick={() => setShowChatbot((prev) => !prev)}
          id="chatbot-toggler"
        >
          <span className="material-symbols-rounded">mode_comment</span>
          <span className="material-symbols-rounded">close</span>
        </button>
        <div className="chatbot-popup">
          <div className="chat-header">
            <div className="header-info">
              <Chatboticon />
              <h2 className="logo-text">Chatbot</h2>
            </div>
            <button
              onClick={() => setShowChatbot((prev) => !prev)}
              className="material-symbols-rounded"
            >
              keyboard_arrow_down
            </button>
          </div>
          <div ref={chatBodyRef} className="chat-body">
            <div className="message bot-message">
              <Chatboticon />
              <p className="message-text">
                Hey there
                <br />
                how can I help you today?
              </p>
            </div>
            {chatHistory.map((chat, index) => (
              <Chatmessage key={index} chat={chat} />
            ))}
          </div>
          <div className="chat-footer">
            <Chatform
              chatHistory={chatHistory}
              setChatHistory={setChatHistory}
              generateBotResponse={generateBotResponse}
            />
          </div>
        </div>

        <ToastContainer />
      </div>
    </>
  );
};

export default App;
