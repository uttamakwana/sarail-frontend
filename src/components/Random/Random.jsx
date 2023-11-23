import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { FaVolumeUp } from "react-icons/fa";
import axios from "axios";

const Random = () => {
  const [announcement, setAnnouncement] = useState("");

  const playAnnouncement = () => {
    // Send a request to the backend to get the announcement audio URL
    axios
      .get("http://localhost:5000/announcement/audio")
      .then((response) => {
        const audio = new Audio(response.data.audioUrl);
        audio.play();
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Text>{announcement}</Card.Text>
          <Button variant="primary" onClick={playAnnouncement}>
            <FaVolumeUp /> Play Announcement
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Random;
