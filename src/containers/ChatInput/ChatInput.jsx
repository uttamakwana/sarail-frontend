import React from "react";
import { ALetterLogo, MicrophoneLogo } from '../../constants/images';

const ChatInput = () => {
  return (
    <div className="chat-inputs pi-1">
      <div className="flex row-1">
        <div className="flex-center bg-clr-accent a-letter br-5">
          <img src={ALetterLogo} alt="a-letter" />
        </div>
        <input type="text" className="text" placeholder="Your query..." />
      </div>
      <div className="flex-center row-2 br-5 bg-clr-accent mb-8">
        <img src={MicrophoneLogo} alt="microphone-logo" />
      </div>
    </div>
  );
};

export default ChatInput;
