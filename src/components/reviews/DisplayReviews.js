import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { DataStore } from "@aws-amplify/datastore";
import { Reviews } from "../../models";

export default function DisplayReviews({ eventId }) {
  const [reviewsApi, setReviewsApi] = useState([]);

  useEffect(() => {
    async function fetchReviews() {
      let awsReviews = await DataStore.query(Reviews, (item) =>
        item.EventID("eq", eventId)
      );
      setReviewsApi(awsReviews);
    }
    const fetchInterval = setInterval(fetchReviews, 1000);
    return () => clearInterval(fetchInterval);
  });

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
