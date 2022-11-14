import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { DataStore } from "aws-amplify";
import { Profile, Events } from "../models";
import DisplayReviews from "../components/reviews/DisplayReviews";
import Results from "../components/Results";

// ------------------------------------ MyProfile
export default function MyProfile({ user }) {
  const [profileData, setProfileData] = useState({
    profile: [],
    hostedEvents: [],
  });
  const profile = profileData.profile[0];

  useEffect(() => {
    // If user does not exist exit the function
    if (!user) return;

    const getProfileData = async function (Table, stateKey) {
      const data = await DataStore.query(Table, (item) =>
        item.UserID("eq", user.username)
      );
      setProfileData((prevData) => {
        return { ...prevData, [stateKey]: data };
      });
    };

    getProfileData(Profile, "profile");
    getProfileData(Events, "hostedEvents");
  }, [user]);

  return (
    <>
      {!profile && <h1>Please Log In</h1>}

      {profile && (
        <>
          <img
            src={profile.profilePic}
            style={{ width: 200, height: 100 }}
            alt=""
          />

          <h2>{profile.name + " " + profile.lastName}</h2>
          <section>
            <h2>Profile</h2>
            <Link to="./edit-profile">Edit</Link>

            <h5>About me:</h5>
            <p>{profile.about}</p>

            <h5>Favourite Sports:</h5>
            <p>{profile.favSports}</p>

            <h5>Why I'm on Away Days?</h5>
            <p>{profile.whyOnAwayDays}</p>

            <h5>One amazing sporting event I've been to:</h5>
            <p>{profile.oneAmazingSportEvent}</p>

            <h5>Events I've been to:</h5>
            <p>{profile.pastEvents}</p>

            <h5>Intrests:</h5>
            <p>{profile.interests}</p>
          </section>

          <section>
            <h2>My Hosted Events</h2>
            <Results results={profileData.hostedEvents} />
          </section>

          <section>
            <h2>Reviews</h2>
            <DisplayReviews UserID={user?.username} />
          </section>
        </>
      )}
    </>
  );
}
