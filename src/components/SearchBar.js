import { useState } from "react";
import { Events } from "../models";
import { DataStore } from "@aws-amplify/datastore";

function SearchBar({ results, setResults }) {
  const [searchCriteria, setSearchCriteria] = useState({
    location: { value: "" },
    startDate: { value: "" },
    endDate: { value: "" },
  });
  const [errors, setErrors] = useState({
    location: false,
    startDate: false,
    endDate: false,
  });

  const fields = [
    {
      name: "location",
      type: "text",
      label: "Location",
      placeholder: "Search by location...",
    },
    { name: "startDate", type: "date", label: "Check In" },
    { name: "endDate", type: "date", label: "Check Out" },
  ];

  return (
    <>
      <form>
        <h2>Search for your next experience</h2>
        <div className="search-form">
          {fields.map(({ name, type, label, placeholder = "" }, index) => (
            <div key={index}>
              {errors[name] && <p style={{ color: "red" }}>{label} required</p>}
              <label htmlFor={name}>{label}</label>
              <input
                id={name}
                data-testid={name}
                type={type}
                data-criteria={name}
                onChange={updateSearch}
                placeholder={placeholder}
              />
            </div>
          ))}
          <button onClick={search} data-testid="search-btn">
            Search
          </button>
        </div>
      </form>
    </>
  );

  function updateSearch({ target }) {
    const criteria = target.dataset.criteria;
    setSearchCriteria((prevSearchCriteria) => {
      return { ...prevSearchCriteria, [criteria]: target.value.toLowerCase() };
    });
    setErrors((prevErrors) => {
      return { ...prevErrors, [criteria]: false };
    });
  }

  async function search(event) {
    event.preventDefault();
    let awsResults = await DataStore.query(Events);
    if (validateForm()) return;

    setResults(
      awsResults.filter((item) => {
        const isLocationInItem = item.location
          ?.toLowerCase()
          .includes(searchCriteria.location);
        return (
          isLocationInItem &&
          isDateWithinRange("start", item) &&
          isDateWithinRange("end", item)
        );
      })
    );
  }
  function validateForm() {
    let errorExists = false;

    for (let key in searchCriteria) {
      const isCriteriaEmpty = !searchCriteria[key].length;
      if (isCriteriaEmpty) errorExists = true;
      setErrors((prevErrors) => {
        return { ...prevErrors, [key]: isCriteriaEmpty };
      });
    }

    return errorExists;
  }

  function isDateWithinRange(startOrEnd, item) {
    const searchDate = new Date(searchCriteria[`${startOrEnd}Date`]);
    const itemDate = new Date(item[`${startOrEnd}Date`]);
    return startOrEnd === "start"
      ? searchDate >= itemDate
      : searchDate <= itemDate;
  }
}
export default SearchBar;
