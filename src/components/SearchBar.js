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
  const [errors, setErrors] = useState({
    location: false,
    startDate: false,
    endDate: false
  })
  const [results, setResults] = useState([])

  return (
    <>
      <form>
        <h2>Search for your next experience</h2>
        <label htmlFor="location">Location</label>
        <input
          id="location"
          type="text"
          onChange={updateSearch}
          data-criteria="location"
          placeholder="Search by location..."
        />
        <label htmlFor="check-in">Check-in</label>
        <input
          id="check-in"
          type="date"
          data-criteria="startDate"
          onChange={updateSearch}
        />
        <label htmlFor="check-out">Check-Out</label>
        <input
          id="check-out"
          type="date"
          data-criteria="endDate"
          onChange={updateSearch}
        />
        <button onClick={search}>Search</button>
      </form>
      {console.log(errors)}
      {results.map((resultItem, index) => (
        <div key={`event-${index}`}>
          <p>Name: {resultItem.name}</p>
          <p>Location: {resultItem.location}</p>
          <p>Start: {resultItem.startDate}</p>
          <p>End: {resultItem.endDate}</p>
          <hr />
        </div>
      ))}
    </>
  )

  function updateSearch({ target }) {
    const criteria = target.dataset.criteria
    setSearchCriteria((prevSearchCriteria) => {
      return { ...prevSearchCriteria, [criteria]: target.value.toLowerCase() }
    })
  }

  function search(event) {
    event.preventDefault()
    if (validateForm()) return console.log("error found")

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

    function validateForm() {
      let errorExists = false

      for (let key in searchCriteria) {
        const isCriteriaEmpty = !searchCriteria[key].length
        if (isCriteriaEmpty) errorExists = true
        setErrors((prevErrors) => {
          return { ...prevErrors, [key]: isCriteriaEmpty }
        })
      }

      return errorExists
    }
  }

  function isDateWithinRange(startOrEnd, item) {
    const searchDate = new Date(searchCriteria[`${startOrEnd}Date`])
    const itemDate = new Date(item[`${startOrEnd}Date`])
    return searchDate >= itemDate
  }
}

export default SearchBar
