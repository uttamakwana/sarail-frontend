import React from "react";
import "./statoin-information.css";
import {
  MapIcon,
  AlertIcon,
  ViewStopIcon,
  Train2Icon,
  ReservationIcon,
  WaitingTimeIcon,
  DirectionIcon,
  CalendarIcon,
  LocationIcon,
} from "../../constants/icons";

const StationInformation = () => {
  return (
    <main className="flex-column station-information-container">
      <section className=" bg-clr-accent4 p-1 br-5">
        <h1 className="subheading">Station Information</h1>
        <div className="flex">
          <div className="station-badge">
            <MapIcon className="station-badge-icon" />
            <strong className="text">Station Map</strong>
          </div>
          <div className="station-badge">
            <LocationIcon className="station-badge-icon" />
            <strong className="text">Nearby Shops</strong>
          </div>
          <div className="station-badge">
            <CalendarIcon className="station-badge-icon" />
            <strong className="text">Time Table</strong>
          </div>
        </div>
      </section>
      <section className=" bg-clr-accent4 p-1 br-5">
        <h1 className="subheading">Platform Information</h1>
        <div className="flex-between">
          <div className="station-badge">
            <DirectionIcon className="station-badge-icon" />
            <strong className="text">Journey</strong>
          </div>
          <div className="station-badge">
            <WaitingTimeIcon className="station-badge-icon" />
            <strong className="text">Wait Time</strong>
          </div>
          <div className="station-badge">
            <ReservationIcon className="station-badge-icon" />
            <strong className="text">Reservations</strong>
          </div>
        </div>
      </section>
      <section className=" bg-clr-accent4 p-1 br-5">
        <h1 className="subheading">Train Information</h1>
        <div className="flex-between">
          <div className="station-badge">
            <Train2Icon className="station-badge-icon" />
            <strong className="text">Trains Now</strong>
          </div>
          <div className="station-badge">
            <ViewStopIcon className="station-badge-icon" />
            <strong className="text">View Stops</strong>
          </div>
          <div className="station-badge">
            <AlertIcon className="station-badge-icon" />
            <strong className="text">Send Alert</strong>
          </div>
        </div>
      </section>
    </main>
  );
};

export default StationInformation;
