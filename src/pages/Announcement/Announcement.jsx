import React, { useContext } from "react";
import { BottomTabs, Header } from "../../components";
import { Context } from "../../context/ContextProvider";
// icons
import { AnnouncementIcon, SpeakerIcon } from "../../constants/icons";
// styles
import "./announcement.css";
import { CompassLogo, ListenLogo, UserQueryLogo } from "../../constants/images";

const announcements = [
  "Cleaning at platform no 3 and 5 . Train no 5567 will be delayed by 15 minutes. Please wait",
  "Platform 5 is now vacant. Train no 34455 has left the station",
  "Cleaning at platform no 3 and 5 . Train no 5567 will be delayed by 15 minutes. Please wait",
  "Platform 5 is now vacant. Train no 34455 has left the station",
  "Cleaning at platform no 3 and 5 . Train no 5567 will be delayed by 15 minutes. Please wait",
  "Platform 5 is now vacant. Train no 34455 has left the station",
  "Cleaning at platform no 3 and 5 . Train no 5567 will be delayed by 15 minutes. Please wait",
  "Platform 5 is now vacant. Train no 34455 has left the station",
  "Cleaning at platform no 3 and 5 . Train no 5567 will be delayed by 15 minutes. Please wait",
  "Platform 5 is now vacant. Train no 34455 has left the station",
  "Cleaning at platform no 3 and 5 . Train no 5567 will be delayed by 15 minutes. Please wait",
  "Platform 5 is now vacant. Train no 34455 has left the station",
];

const Announcement = () => {
  const { stationName } = useContext(Context);
  return (
    <main className="announcements-page">
      <Header />
      {/* <p className="text text-center">
        You'll get announcements of{" "}
        <strong className="strong">{stationName}</strong> station
      </p> */}
      {/* Announcement Header */}
      <div className="flex-center">
        <AnnouncementIcon className="announcement-icon" style={{fill: "var(--color-complement)"}} />
        <div className="announcement-heading mb-1">
          <h2 className="subheading clr-primary">Announcements</h2>
          <p className="text clr-primary">Western Railways</p>
        </div>
      </div>
      {/* Announcement Main Content */}
      <section className="announcement-content max-350 margin-auto bg-clr-accent4 p-1 br-5">
        {announcements &&
          announcements.map((announcement) => (
            <div
              className="bg-clr-accent mt-8 br-5 p-8 flex-between announcement"
              key={announcement}
            >
              <p className="text">{announcement}</p>
              <div>
                <SpeakerIcon className="speaker-icon" />
              </div>
            </div>
          ))}
      </section>
      {/* Announcement Utility function */}
      <section className="p-8 bg-clr-accent4 flex-between br-5 pi-2 max-350 mb-1 margin-auto">
        <div className="announcement-utility-badge">
          <img src={CompassLogo} alt="select zone" />
          <p className='text'>Select Zone</p>
        </div>
        <div className="announcement-utility-badge">
          <img src={UserQueryLogo} alt="select zone" />
          <p className='text'>Query</p>
        </div>
        <div className="announcement-utility-badge">
          <img src={ListenLogo} alt="select zone" />
          <p className='text'>Listen</p>
        </div>
      </section>
      {/* Bottom Tabs */}
      <BottomTabs />
    </main>
  );
};

export default Announcement;
