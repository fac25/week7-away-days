import { useState, useEffect } from "react";
import DisplayAcommodation from "../accommodation/DisplayAccommodation";
import DisplayReviews from "../reviews/DisplayReviews";
import { Events } from "../../models";
import { DataStore } from "aws-amplify";
import Image from "../Image";
import CreateReview from "../reviews/CreateReview";

const CurrentEvent = () => {
  const [currentEvent, setCurrentEvent] = useState({});
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    (async function () {
      const eventIdFromUrl = window.location.pathname.split("/").pop();
      const event = await DataStore.query(Events, eventIdFromUrl);
      setCurrentEvent(event);
    })();
  }, []);

  return (
    currentEvent && (
      <div>
        <h2>{currentEvent.name}</h2>
        <h3>{currentEvent.sport}</h3>
        <p>{currentEvent.location}</p>
        <div>
          <span>{currentEvent.startDate}</span>
          <span>{currentEvent.endDate}</span>
        </div>
        <Image src={currentEvent.img} alt="test" />
        <p>{currentEvent.description}</p>
        <DisplayAcommodation EventID={currentEvent.id} />
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
      </div>
    )
  );
};

export default CurrentEvent;
