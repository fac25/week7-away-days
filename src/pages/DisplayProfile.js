import { useState, useEffect } from "react";
import { DataStore } from "aws-amplify";
import { Profile, Events, Reviews } from "../models";
import Image from "../components/Image";
import Results from "../components/Results";
import DisplayReviews from "../components/reviews/DisplayReviews";
import { Link } from "react-router-dom";

const DisplayProfile = ({ user }) => {
  const [profileData, setProfileData] = useState({
    profile: [],
    events: [],
  });
  const [reviews, setReviews] = useState([]);

  const profile = profileData.profile[0];

  const urlPrefixLength = 17;
  const hostID = window.location.pathname.slice(urlPrefixLength);

  const isOwnerOfPage = user?.username === hostID;

  useEffect(() => {
    fetchData(Profile, "profile");
    fetchData(Events, "events");
    fetchData(Reviews, "reviews");
  }, []);

  async function fetchData(Table, stateKey) {
    const data = await DataStore.query(Table, (profile) =>
      profile.UserID("eq", hostID)
    );

    setProfileData((prevObj) => ({ ...prevObj, [stateKey]: data }));
  }

  return profile ? (
    <>
      <div>
        <Image src={profile.profilePic} />
        <h2>
          {profile.name} {profile.lastName}
        </h2>
      </div>

      <div>
        {isOwnerOfPage && <Link to="/my-profile/edit-profile">Edit</Link>}
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
      </div>

      {/* Events */}
      <section>
        <h2>Hosted Events</h2>
        <Results results={profileData.events} />
      </section>

      {/* Reviews */}
      <section>
        <h2>Reviews</h2>
        <DisplayReviews
          UserID={profile.UserID}
          reviews={reviews}
          setReviews={setReviews}
        />
      </section>
    </>
  ) : (
    <p>Loading...</p>
  );
};

export default DisplayProfile;
