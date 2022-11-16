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
    <div>
      {results ? (
        results.length ? (
          <ResultCards results={results} />
        ) : (
          <p>No events found...</p>
        )
      ) : (
        <>
          <h2>Events</h2>
          <ResultCards results={eventsData} />
        </>
      )}
    </div>
  );
}

function ResultCards({ results }) {
  return results.map((resultItem, index) => (
    <Link to={`/current-event/${resultItem.id}`} key={`event-${index}`}>
      <div>
        <p>Name: {resultItem.name}</p>
        <Image src={resultItem.img} />
        <p>Sport: {resultItem.sport}</p>
        <p>Description: {resultItem.description}</p>
        <p>Start date: {formatDate(resultItem.startDate)}</p>
        <p>Start date: {formatDate(resultItem.endDate)}</p>
        <hr />
      </div>
    </Link>
  ));
}
