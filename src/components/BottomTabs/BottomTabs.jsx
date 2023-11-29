import React from "react";
import {
  ChatBotLogo,
  HomeLogo,
  AnnouncementLogo,
} from "../../constants/images";
import "./bottom-tabs.css";

// navigation
import { useNavigate } from "react-router-dom";

const BottomTabs = () => {
  // navigation
  const navigate = useNavigate();
  return (
    <footer className="bottom-tabs flex-center">
      <div className="bottom-tabs-container max-350 flex-between">
        <div className="chat-bot-menu">
          <img
            src={ChatBotLogo}
            alt="chat-bot"
            onClick={() => {
              navigate("/chatbot");
            }}
          />
        </div>
        <div className="home-menu">
          <img
            src={HomeLogo}
            alt="chat-bot"
            onClick={() => {
              navigate("/home");
            }}
          />
        </div>
        <div className="announcement-menu">
          <img
            src={AnnouncementLogo}
            alt="chat-bot"
            onClick={() => {
              navigate("/announcements");
            }}
          />
        </div>
      </div>
    </footer>
  );
};

export default BottomTabs;
