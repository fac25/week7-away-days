import { Link } from "react-router-dom"

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
              <p>Location: {resultItem.location}</p>
              <p>Start: {resultItem.startDate}</p>
              <p>End: {resultItem.endDate}</p>
              <hr />
            </div>
          </Link>
        ))
      )}
    </div>
  )
}
