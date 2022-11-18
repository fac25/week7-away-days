import { useState, useEffect } from "react";
import DisplayAcommodation from "../accommodation/DisplayAccommodation";
import DisplayReviews from "../reviews/DisplayReviews";
import { Events, Profile } from "../../models";
import { DataStore } from "aws-amplify";
import Image from "../Image";
import Email from "../Email";
import CreateReview from "../reviews/CreateReview";
import { Link } from "react-router-dom";

const CurrentEvent = () => {
  const [currentEvent, setCurrentEvent] = useState({});
  const [reviews, setReviews] = useState([]);
  const [profileData, setProfileData] = useState([]);

  useEffect(() => {
    (async function () {
      const eventIdFromUrl = window.location.pathname.split("/").pop();
      const event = await DataStore.query(Events, eventIdFromUrl);
      setCurrentEvent(event);
    })();
  }, []);

  // Find Profile
  const userProfileID = currentEvent.UserID;

  useEffect(() => {
    const getProfileData = async function () {
      const data = await DataStore.query(Profile, (item) =>
        item.UserID("eq", userProfileID)
      );
      setProfileData(data);
    };
    getProfileData();
  }, [userProfileID]);

  const hostData = profileData[0];

  return (
    currentEvent && (
      <div className="current-event">
        {hostData && <ProfileLink hostData={hostData} />}
        <div className="current-event-wrapper">
          <h2>Event name: {currentEvent.name}</h2>
          <div className="sport-wrapper">
            <h3>Sport: {currentEvent.sport}</h3>
            <p>Location: {currentEvent.location}</p>
          </div>
          <div className="dates">
            <span>Start date: {currentEvent.startDate}</span>
            <span>End date: {currentEvent.endDate}</span>
          </div>
          <Image src={currentEvent.img} alt="test" />
          <p>Description: {currentEvent.description}</p>
        </div>
        {/* <DisplayAcommodation EventID={currentEvent.id}/> */}
        <CreateReview
          setReviews={setReviews}
          EventID={currentEvent.id}
          UserID={currentEvent.UserID}
        />
        <DisplayReviews
          reviews={reviews}
          setReviews={setReviews}
          EventID={currentEvent.id}
        />
        <Email hostData={hostData} />
      </div>
    )
  );
};

function ProfileLink({ hostData }) {
  return (
    <div className="profile-link">
      <Link to={`/display-profile/${hostData.UserID}`}>
        <Image src={hostData.profilePic} />
        <h2>{hostData.name + " " + hostData.lastName}</h2>
      </Link>
    </div>
  );
}

export default CurrentEvent;
