import { useState } from "react";

const CreateAccommodation = ({Accommodation, DataStore}) => {
  const [location, setLocation] = useState();
  const [description, setDescription] = useState();
  const [facilities, setFacilities] = useState([]);

  const handleChange = (e) => {
    if (e.target.id === "location") {
      setLocation(e.target.value);
    }
    if (e.target.id === "facilities") {
      const arrayFacilities = e.target.value.split(",")
      setFacilities(arrayFacilities);
    }
    if (e.target.id === "description") {
      setDescription(e.target.value);
    }
  };

  const handleClick = async () => {
    await DataStore.save(
      new Accommodation({
        location: location,
        facilities: facilities,
        description: description,
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
