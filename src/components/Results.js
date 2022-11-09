export default function Results({ results }) {
  return (
    <div>
      {!results.length ? (
        <p>No results found...</p>
      ) : (
        results.map((resultItem, index) => (
          <div key={`event-${index}`}>
            <p>Name: {resultItem.name}</p>
            <p>Location: {resultItem.location}</p>
            <p>Start: {resultItem.startDate}</p>
            <p>End: {resultItem.endDate}</p>
            <hr />
          </div>
        ))
      )}
    </div>
  );
}
