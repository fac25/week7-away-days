import { useState } from "react"

const mockData = [
  {
    id: 0,
    name: "What is this name?",
    sport: "Football",
    description: "asdfasdf",
    location: "Buenos Aires",
    startDate: "2022-11-09",
    endDate: "2022-11-10"
  },
  {
    id: 1,
    name: "LMAOMANGIGACHAD",
    sport: "Football",
    description: "lololol",
    location: "Colombia",
    startDate: "2022-11-08",
    endDate: "2022-11-09"
  }
]

function SearchBar() {
  const [searchCriteria, setSearchCriteria] = useState({
    location: "",
    startDate: "",
    endDate: ""
  })
  const [results, setResults] = useState([])

  return (
    <form>
      <h2>Search for your next experience</h2>
      <input
        type="text"
        onChange={updateSearch}
        data-criteria="location"
        placeholder="Search by location..."
      />
      <input type="date" data-criteria="startDate" onChange={updateSearch} />
      <input type="date" data-criteria="endDate" onChange={updateSearch} />
      <button onClick={search}>Search</button>

      {results.map((resultItem, index) => (
        <div key={`event-${index}`}>
          <p>Name: {resultItem.name}</p>
          <p>Location: {resultItem.location}</p>
          <p>Start: {resultItem.startDate}</p>
          <p>End: {resultItem.endDate}</p>
          <hr />
        </div>
      ))}
    </form>
  )

  function updateSearch({ target }) {
    const criteria = target.dataset.criteria
    setSearchCriteria((prevSearchCriteria) => {
      return { ...prevSearchCriteria, [criteria]: target.value.toLowerCase() }
    })
  }

  function search(event) {
    event.preventDefault()

    setResults(
      mockData.filter((item) => {
        const isLocationInItem = item.location
          .toLowerCase()
          .includes(searchCriteria.location)
        return (
          isLocationInItem &&
          isDateWithinRange("start", item) &&
          isDateWithinRange("end", item)
        )
      })
    )
  }

  function isDateWithinRange(startOrEnd, item) {
    const searchDate = new Date(searchCriteria[`${startOrEnd}Date`])
    const itemDate = new Date(item[`${startOrEnd}Date`])
    return searchDate >= itemDate
  }
}

export default SearchBar
