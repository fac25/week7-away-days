import formatDate from "../utils";
import { Link } from "react-router-dom";
import Image from "./Image";
import { Events } from "../models";
import { DataStore } from "aws-amplify";
import { useState, useEffect } from "react";

export default function Results({ results }) {
  // All Events Data Array
  const [eventsData, setEventsData] = useState([]);

  useEffect(() => {
    const awsEventData = async function () {
      const awsEvents = await DataStore.query(Events);
      setEventsData(awsEvents);
    };

    awsEventData();
  }, []);

  return (
    <div className="events">
      {results ? (
        results.length ? (
          <div className="event">
            <ResultCards results={results} />
          </div>
        ) : (
          <p>No events found...</p>
        )
      ) : (
        <>
          <h2>Events</h2>

          <div className="event">
            <ResultCards results={eventsData} />
          </div>
        </>
      )}
    </div>
  );
}

function ResultCards({ results }) {
  return results.map((resultItem, index) => (
    <div className="event-wrapper">
      <Link to={`/current-event/${resultItem.id}`} key={`event-${index}`}>
        <p className="name">
          <span>Name:</span> {resultItem.name}
        </p>
        <Image src={resultItem.img} />
        <p className="location">
          <span>Location:</span>
          {resultItem.location}
        </p>
        <p className="sport">
          <span>Sport: </span>
          {resultItem.sport}
        </p>

        <p className="description">
          <span>Description: </span>
          {resultItem.description}
        </p>
        <p className="start-date">
          <span>Start date:</span> {formatDate(resultItem.startDate)}
        </p>
        <p className="end-date">
          <span>End date:</span> {formatDate(resultItem.endDate)}
        </p>
      </Link>
    </div>
  ));
}
