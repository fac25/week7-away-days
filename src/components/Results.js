import formatDate from "../utils";
import { Link } from "react-router-dom";
import Image from "./Image";
import { Events } from "../models";
import { DataStore } from "aws-amplify";

export default function Results({ results }) {
  async function awsEventData() {
    let awsEvents = await DataStore.query(Events);
    console.log(awsEvents[0].name);

    return <h4>{awsEvents[0].name}</h4>;
  }

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
          <h1>Results</h1>
          <button onClick={awsEventData}>Log Events</button>
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
