import { useState, useEffect } from "react";

const CurrentEvents = ({ Events, DataStore }) => {
  const [currentEvents, setCurrentEvents] = useState();

  useEffect(() => {
    const getCurrentEvents = async () => {
      const event = await DataStore.query(
        Events,
        "49e46d4e-4b19-43b2-8297-36de2023e528"
      );

      const getDate = new Date();

      if (event.endDate < getDate.toLocaleDateString) {
        setCurrentEvents(event);
      }
    };

    getCurrentEvents();
  }, [Events, DataStore]);

  return (
    <div>
      <h1>Events</h1>
      {currentEvents ? (
        <div>
          <h2>{currentEvents.name}</h2>
          <h3>{currentEvents.sport}</h3>
          <div>
            <span>{currentEvents.startDate}</span>
            <span>{currentEvents.endDate}</span>
          </div>
          <img src="" alt="test" />
          <p>{currentEvents.description}</p>
        </div>
      ) : (
        <p>There is no current events</p>
      )}
    </div>
  );
};

export default CurrentEvents;
