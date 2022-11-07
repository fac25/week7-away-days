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
    location: { value: "" },
    startDate: { value: "" },
    endDate: { value: "" }
  })
  const [errors, setErrors] = useState({
    location: false,
    startDate: false,
    endDate: false
  })

  const [results, setResults] = useState([])

  const fields = [
    {
      name: "location",
      type: "text",
      label: "Location",
      placeholder: "Search by location..."
    },
    { name: "startDate", type: "date", label: "Check In" },
    { name: "endDate", type: "date", label: "Check Out" }
  ]

  return (
    <>
      <form>
        <h2>Search for your next experience</h2>
        {fields.map(({ name, type, label, placeholder = "" }) => (
          <>
            {errors[name] && <p style={{ color: "red" }}>{label} required</p>}
            <label htmlFor={name}>{label}</label>
            <input
              id={name}
              type={type}
              data-criteria={name}
              onChange={updateSearch}
              placeholder={placeholder}
            />
          </>
        ))}
        <button onClick={search}>Search</button>
      </form>

      {/* Results placeholder */}
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
    </>
  )

  function updateSearch({ target }) {
    const criteria = target.dataset.criteria
    setSearchCriteria((prevSearchCriteria) => {
      return { ...prevSearchCriteria, [criteria]: target.value.toLowerCase() }
    })
    setErrors((prevErrors) => {
      return { ...prevErrors, [criteria]: false }
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
    return startOrEnd === "start"
      ? searchDate >= itemDate
      : searchDate <= itemDate
  }
}

export default SearchBar
