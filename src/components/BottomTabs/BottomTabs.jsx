import React from "react";
import { ChatBotLogo, HomeLogo, AnnouncementLogo } from "../../constants/images";
import './bottom-tabs.css';

const BottomTabs = () => {
  return (
    <footer className="bottom-tabs flex-center">
      <div className="bottom-tabs-container max-350 flex-between">
        <div className="chat-bot-menu">
          <img src={ChatBotLogo} alt="chat-bot" />
        </div>
        <div className="home-menu">
          <img src={HomeLogo} alt="chat-bot" />
        </div>
        <div className="announcement-menu">
          <img src={AnnouncementLogo} alt="chat-bot" />
        </div>
      </div>
    </footer>
  );
};

export default BottomTabs;
