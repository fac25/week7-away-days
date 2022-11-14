import { useState } from "react";
import { Link } from "react-router-dom";
import { DataStore } from "@aws-amplify/datastore";
import { Profile } from "../../models";
import { useNavigate } from "react-router-dom";

const CreateProfile = () => {
  const navigate = useNavigate();
  localStorage.removeItem("signup"); 

  const [profile, setProfile] = useState();

  const handleChange = (e) => {
    setProfile((prevState) => {
      return { ...prevState, ...{ [e.target.id]: e.target.value } };
    });
  };

  const handleClick = async () => {
    await DataStore.save(
      new Profile({
        profilePic: profile.profileImg,
        about: profile.about,
        favSports: profile.favouriteSports,
        whyOnAwayDays: profile.why,
        oneAmazingSportEvent: profile.oneSportingEvent,
        pastEvents: profile.pastEvents,
        interests: profile.interests,
      })
    );
    navigate("/");
  };

  return (
    <div>
      <h1>Create Profile</h1>
      <label htmlFor="upload image">Upload image:</label>
      <input type="file" id="profileImg" onChange={handleChange} />
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
