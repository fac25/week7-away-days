import { useState } from "react";
import { Events } from "../models";
import { DataStore } from "@aws-amplify/datastore";

function SearchBar({ setResults }) {
  const [searchCriteria, setSearchCriteria] = useState({
    location: { value: "", error: false },
    startDate: { value: "", error: false },
    endDate: { value: "", error: false }
  });

  const fields = [
    {
      name: "location",
      type: "text",
      label: "Location",
      placeholder: "Search by location..."
    },
    { name: "startDate", type: "date", label: "Check In" },
    { name: "endDate", type: "date", label: "Check Out" }
  ];

  return (
    <>
      <form>
        <h2>Search for your next experience</h2>
        <div className="search-form">
          {fields.map(({ name, type, label, placeholder = "" }, index) => (
            <div key={index}>
              {searchCriteria[name].error && (
                <p style={{ color: "red" }}>{label} required</p>
              )}
              <label htmlFor={name}>{label}</label>
              <input
                id={name}
                type={type}
                onChange={updateSearch}
                placeholder={placeholder}
              />
            </div>
          ))}
          <button onClick={search}>Search</button>
        </div>
      </form>
    </>
  );

  function updateSearch({ target }) {
    const criteria = target.id;
    setSearchCriteria((prevSearchCriteria) => {
      return {
        ...prevSearchCriteria,
        [criteria]: { value: target.value.toLowerCase(), error: false }
      };
    });
  }

  async function search(event) {
    event.preventDefault();
    let awsResults = await DataStore.query(
      Events,
      (item) =>
        item.startDate("ge", searchCriteria.startDate.value) &&
        item.startDate("le", searchCriteria.endDate.value)
    );
    if (validateForm()) return;

    setResults(
      awsResults.filter((item) => {
        const isLocationInItem = item.location
          .toLowerCase()
          .includes(searchCriteria.location.value);
        return isLocationInItem;
      })
    );
  }
  function validateForm() {
    let errorExists = false;

    for (let key in searchCriteria) {
      const isCriteriaEmpty = !searchCriteria[key].value.length;
      if (isCriteriaEmpty) errorExists = true;
      setSearchCriteria((prevObj) => ({
        ...prevObj,
        [key]: { ...prevObj[key], error: isCriteriaEmpty }
      }));
    }

    return errorExists;
  }
}
export default SearchBar;
