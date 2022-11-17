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
      <div>
        {hostData && <ProfileLink hostData={hostData} />}
        <h2>{currentEvent.name}</h2>
        <h3>{currentEvent.sport}</h3>
        <p>{currentEvent.location}</p>
        <div>
          <span>{currentEvent.startDate}</span>
          <span>{currentEvent.endDate}</span>
        </div>
        <Image src={currentEvent.img} alt="test" />
        <p>{currentEvent.description}</p>
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
    <Link to={`/display-profile/${hostData.UserID}`}>
      <Image src={hostData.profilePic} />
      <h2>{hostData.name + " " + hostData.lastName}</h2>
    </Link>
  );
}

export default CurrentEvent;
