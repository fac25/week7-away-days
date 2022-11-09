import { useState } from "react";

const CreateEvent = ({Events, DataStore}) => {
  const [name, setName] = useState("");
  const [sport, setSport] = useState("");
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [description, setDescription] = useState("");

  const handleChange = (e) => {
    if (e.target.id === "name") {
      setName(e.target.value);
    }
    if (e.target.id === "sport") {
      setSport(e.target.value);
    }
    if (e.target.id === "start-date") {
      setStartDate(e.target.value);
    }
    if (e.target.id === "end-date") {
      setEndDate(e.target.value);
    }
    if (e.target.id === "description") {
      setDescription(e.target.value);
    }
  };

  const handleClick = async () => {
    await DataStore.save(
      new Events({
        name: name,
        sport: sport,
        startDate: startDate,
        endDate: endDate,
        description: description,
      })
    );

    const event = await DataStore.query(Events);
    console.log(
      "Event retrieved successfully!" + JSON.stringify(event, null, 2)
    );
  };

  return (
    <div>
      <h1>Create Event</h1>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" onChange={handleChange} />

      <label htmlFor="sport">Sport</label>
      <input type="text" id="sport" onChange={handleChange} />

      <label htmlFor="start-date">Start Date</label>
      <input type="date" id="start-date" onChange={handleChange} />

      <label htmlFor="end-date">End Date</label>
      <input type="date" id="end-date" onChange={handleChange} />

      <label htmlFor="description">Description</label>
      <textarea id="description" onChange={handleChange}></textarea>

      <button onClick={handleClick}>Create Event</button>
    </div>
  );
};

export default CreateEvent;
