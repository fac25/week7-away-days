import { DataStore } from "@aws-amplify/datastore";
import { useState } from "react";
import { Profile } from "../../models";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import UploadImg from "../UploadImg";

export default function EditProfileComponent({ user }) {
  const navigate = useNavigate();

  const [profile, setProfile] = useState();
  const [profileImg, setProfileImg] = useState("");

  const handleChange = (e) => {
    setProfile((prevState) => {
      return { ...prevState, ...{ [e.target.id]: e.target.value } };
    });
  };

  async function updateProfile() {
    let original = await DataStore.query(Profile, (item) =>
      item.UserID("eq", user.username)
    );

    await DataStore.save(
      Profile.copyOf(original[0], (updated) => {
        updated.UserID = user.username;
        updated.name = profile.name;
        updated.lastName = profile.lastName;
        updated.about = profile.about;
        updated.favSports = profile.favouriteSports;
        updated.whyOnAwayDays = profile.why;
        updated.oneAmazingSportEvent = profile.oneSportingEvent;
        updated.pastEvents = profile.pastEvents;
        updated.interests = profile.interests;
        updated.profilePic = profileImg;
      })
    );
    navigate("/");
  }

  return (
    <div>
      <h1>Edit Profile</h1>

      <UploadImg updateFileName={setProfileImg} />
      {/* <label htmlFor="upload image">Upload image:</label>
      <input type="file" id="profileImg" onChange={handleChange} /> */}

      <input type="text" id="name" onChange={handleChange} />
      <label htmlFor="name">name:</label>

      <input type="text" id="lastName" onChange={handleChange} />
      <label htmlFor="lastName">last Name:</label>

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

      <Link to="/my-profile" onClick={updateProfile}>
        Save
      </Link>
    </div>
  );
}
