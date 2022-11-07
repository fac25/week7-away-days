import { useState } from "react"

const mockData = [
  {
    id: 0,
    name: "What is this name?",
    sport: "Football",
    description: "asdfasdf",
    location: "Buenos Aires",
    startDate: "2022-11-08",
    endDate: "2022-11-09"
  },
  {
    id: 0,
    name: "What is this name?",
    sport: "Football",
    description: "lololol",
    location: "Buenos Aires",
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

  return (
    <form>
      <h2>Search for your next experience</h2>
      <input
        type="text"
        onChange={updateSearch}
        data-criteria="location"
        placeholder="Search by location..."
      />
      <input type="date" data-criteria="startDate" />
      <button onClick={search}>Search</button>
    </form>
  )

  function updateSearch({ target }) {
    const criteria = target.dataset.criteria
    setSearchCriteria((prevSearch) => {
      return { ...prevSearch, [criteria]: target.value }
    })
  }

  function search(event) {
    event.preventDefault()
  }
}

export default SearchBar
