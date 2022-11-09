import { useState } from "react";

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

  return (
    <div>
      <h1>Create About</h1>
      <label htmlFor="about">About</label>
      <input type="text" id="about" onChange={handleChange} />
      <button onClick={handleClick}>Add About</button>
    </div>
  );
};

export default CreateProfile;
