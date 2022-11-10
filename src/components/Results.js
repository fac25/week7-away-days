import formatDate from "../utils";

export default function Results({ results }) {
  return (
    <div>
      {!results.length ? (
        <p>No results found...</p>
      ) : (
        results.map((resultItem, index) => (
          <div key={`event-${index}`}>
            <p>Name: {resultItem.name}</p>
            <img src={resultItem.img} alt={`${resultItem.sport}`} />
            <p>Sport: {resultItem.sport}</p>
            <p>Description: {resultItem.description}</p>
            <p>Start date: {formatDate(resultItem.startDate)}</p>
            <p>Start date: {formatDate(resultItem.endDate)}</p>
            <hr />
          </div>
        ))
      )}
    </div>
  );
}
