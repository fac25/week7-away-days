import { useState } from "react";
import { Link } from "react-router-dom";

const CreateProfile = ({ Profile, DataStore }) => {
  const [about, setAbout] = useState("");

  const handleChange = (e) => {
    if (e.target.id === "about") {
      setAbout(e.target.value);
    }
  };

  const handleClick = async () => {
    await DataStore.save(
      new Profile({
        about: about,
      })
    );
  };

  console.log(about);

  return (
    <div>
      <h1>Create Profile</h1>
      <label htmlFor="about">About Me:</label>
      <textarea type="text" id="about" onChange={handleChange} />
      <label htmlFor="favouriteSports">Favourite sports:</label>
      <textarea type="text" id="favouriteSports" onChange={handleChange} />
      <label htmlFor="why on away days">Why I'm on Away Days:</label>
      <textarea type="text" id="why" onChange={handleChange} />
      <label htmlFor="one amazing sporting event">
        One amazing sporting event I've been to:
      </label>
      <textarea type="text" id="oneSportingEvent" onChange={handleChange} />
      <label htmlFor="past events">Events I've been to:</label>
      <textarea type="text" id="pastEvents" onChange={handleChange} />
      <label htmlFor="interests">Interests:</label>
      <textarea type="text" id="interests" onChange={handleChange} />
      <button onClick={handleClick}>Create profile</button>
      <Link to="/">Skip</Link>
    </div>
  );
};

export default CreateProfile;
