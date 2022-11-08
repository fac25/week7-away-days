import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { DataStore } from "@aws-amplify/datastore";
import { Reviews } from "../models";
import { ConsoleLogger } from "@aws-amplify/core";

export default function DisplayReviews() {
  const [reviewsApi, setReviewsApi] = useState([]);

  useEffect(() => {
    async function fetchReviews() {
      let awsReviews = await DataStore.query(Reviews);
      setReviewsApi(awsReviews);
    }
    fetchReviews();
  }, []);

  return (
    <div>
      {reviewsApi ? (
        reviewsApi.map((review, index) => {
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
