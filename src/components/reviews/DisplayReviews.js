import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { DataStore } from "@aws-amplify/datastore";
import { Reviews } from "../../models";

export default function DisplayReviews({ eventId, UserID }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getReviewData = async function (key, value) {
      const reviewData = await DataStore.query(Reviews, (item) =>
        item[key]("eq", value)
      );
      setReviews(reviewData);
    };

    UserID
      ? getReviewData("UserID", UserID)
      : getReviewData("EventID", eventId);
  }, [eventId, UserID]);

  return (
    <div>
      {reviews ? (
        reviews.map((review, index) => {
          return (
            <ul key={index}>
              <li>{review.name}</li>
              <li>
                {Array(review.rating)
                  .fill()
                  .map((_, index) => (
                    <FaStar key={index} color="orange" />
                  ))}
              </li>
              <li>{review.description}</li>
            </ul>
          );
        })
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
