import formatDate from "../utils";
import { Link } from "react-router-dom"
import Image from "./Image";

export default function Results({ results }) {
  return (
    <div>
      {!results.length ? (
        <p>No results found...</p>
      ) : (
        results.map((resultItem, index) => (
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
        ))
      )}
    </div>
  )
}
