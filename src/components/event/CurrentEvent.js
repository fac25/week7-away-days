import { useState, useEffect } from "react";

const CurrentEvent = ({ Events, DataStore }) => {
  const [currentEvent, setCurrentEvent] = useState({});
  const { name, sport, startDate, location, endDate, description, img } =
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
        <img src={img} alt="test" />
        <p>{description}</p>
      </div>
    )
  );
};

export default CurrentEvent;
