import { useState } from "react";

const CreateProfile = ({ Profile, DataStore }) => {
  const [createAbout, setCreateAbout] = useState({});

  const handleChange = (e) => {
    setCreateAbout((prevState) => {
      return { ...prevState, ...{ [e.target.id]: e.target.value } };
    });
  };

  const handleClick = async () => {
    await DataStore.save(
      new Profile({
        about: createAbout.about,
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
