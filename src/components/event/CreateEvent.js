import { useState } from "react";

const CreateEvent = ({Events, DataStore}) => {
  const [createEvent, setCreateEvents] = useState({});

  const handleChange = (e) => {
    setCreateEvents((prevState) => {
      return { ...prevState, ...{ [e.target.id]: e.target.value } };
    });
  };

  const handleClick = async () => {
    await DataStore.save(
      new Events({
        name: createEvent.name,
        sport: createEvent.sport,
        startDate: createEvent.startDate,
        endDate: createEvent.endDate,
        description: createEvent.description,
      })
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
