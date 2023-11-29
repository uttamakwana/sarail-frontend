import React from "react";
import { ChatbotPrimaryLogo } from "../../constants/images";

ChatbotPrimaryLogo;
const Chats = () => {
  return (
    <section className="chat-container max-350 margin-auto">
      <div className="chat br-5 p-8 bg-clr-accent float-left mb-8">
        <p className="text clr-primary">Good Afternoon. How may I help you?</p>
        <img
          src={ChatbotPrimaryLogo}
          alt="chatbot-logo"
          className="small-icon"
        />
      </div>
      <div className="chat br-5 p-8 bg-clr-accent float-left mb-8">
        <p className="text clr-primary">
          I am Chintu , Chatbot of Sarail. I can help you with changing
          languages , explaining information and getting regular updates.
        </p>
        <img
          src={ChatbotPrimaryLogo}
          alt="chatbot-logo"
          className="small-icon"
        />
      </div>
      <div className="chat br-5 p-8 bg-clr-primary float-right mb-8">
        <p className="text clr-accent1">Can I know where is my train?</p>
      </div>
      <div className="chat br-5 p-8 bg-clr-accent float-left mb-8">
        <p className="text clr-primary">Please give me your train number.</p>
        <img
          src={ChatbotPrimaryLogo}
          alt="chatbot-logo"
          className="small-icon"
        />
      </div>
      <div className="chat br-5 p-8 bg-clr-primary float-right mb-8">
        <p className="text clr-accent1">1234xxxxxxxxx</p>
      </div>
    </section>
  );
};

export default Chats;
