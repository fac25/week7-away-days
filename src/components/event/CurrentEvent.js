import { useState, useEffect } from "react";
import DisplayAcommodation from "../accommodation/DisplayAccommodation";
import DisplayReviews from "../reviews/DisplayReviews";
import { Events } from "../../models";
import { DataStore } from "aws-amplify";
import Image from "../Image";

const CurrentEvent = () => {
  const [currentEvent, setCurrentEvent] = useState({});
  const { name, sport, startDate, location, endDate, description, img, id } =
    currentEvent;

  useEffect(() => {
    const getCurrentEvents = async () => {
      const eventIdFromUrl = window.location.pathname.split("/").pop();
      const event = await DataStore.query(Events, eventIdFromUrl);
      setCurrentEvent(event);
    };
    getCurrentEvents();
  }, []);

  return (
    currentEvent && (
      <div>
        <h2>{name}</h2>
        <h3>{sport}</h3>
        <p>{location}</p>
        <div>
          <span>{startDate}</span>
          <span>{endDate}</span>
        </div>
        <Image src={img} alt="test" />
        <p>{description}</p>
        <DisplayAcommodation eventId={id} />
        <DisplayReviews eventId={id} />
      </div>
    )
  );
};

export default CurrentEvent;
