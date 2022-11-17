import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { DataStore } from "@aws-amplify/datastore";
import { Reviews } from "../../models";

export default function DisplayReviews({
  EventID,
  UserID,
  reviews,
  setReviews,
}) {
  useEffect(() => {
    const getReviewData = async function (key, value) {
      const reviewData = await DataStore.query(Reviews, (item) =>
        item[key]("eq", value)
      );
      setReviews(reviewData);
    };

    UserID
      ? getReviewData("UserID", UserID)
      : getReviewData("EventID", EventID);
  }, [EventID, UserID, reviews, setReviews]);

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
        <p>No reviews to display.</p>
      )}
    </div>
  );
}
