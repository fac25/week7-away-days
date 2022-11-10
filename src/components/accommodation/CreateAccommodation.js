import { useState } from "react";

const CreateAccommodation = ({Accommodation, DataStore}) => {
  const [createAccommodation, setCreateAccommodation] = useState({})

  const handleChange = (e) => {
    setCreateAccommodation((prevState) => {
      return { ...prevState, ...{ [e.target.id]: e.target.value } };
    });
  };

  const handleClick = async () => {
    await DataStore.save(
      new Accommodation({
        location: createAccommodation.location,
        facilities: createAccommodation.facilities,
        description: createAccommodation.description,
      })
    );
  };

  return (
    <div>
      <h1>Create Accommodation</h1>
      <label htmlFor="location">Location</label>
      <input type="text" id="location" onChange={handleChange} />

      <label htmlFor="facilities">Facilities</label>
      <input type="text" id="facilities" onChange={handleChange} />

      <label htmlFor="description">Description</label>
      <textarea id="description" onChange={handleChange}></textarea>

      <button onClick={handleClick}>Create Accommodation</button>
    </div>
  );
};

export default CreateAccommodation;
