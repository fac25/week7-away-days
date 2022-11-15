import { DataStore } from "@aws-amplify/datastore";
import { Profile } from "../../models";
import { Link } from "react-router-dom";

export default function EditProfileComponent({ user }) {
  async function updateProfile() {
    let original = await DataStore.query(Profile, (item) =>
      item.UserID("eq", user.username)
    );

    await DataStore.save(
      Profile.copyOf(original[0], (updated) => {
        updated.about = "test";
        updated.name = "test";
        updated.lastName = "test";
        updated.favSports = "test";
        updated.whyOnAwayDays = "test";
        updated.oneAmazingSportEvent = "test";
        updated.pastEvents = "test";
        updated.interests = "test";
        updated.profilePic = "";
      })
    );
  }

  return (
    <div>
      <button onClick={updateProfile}>Check Log</button>
      <h1>Create Profile</h1>
      {/* <label htmlFor="upload image">Upload image:</label>
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
      <Link to="/my-profile">Save</Link> */}
    </div>
  );
}
