import { FaStar } from "react-icons/fa";

export default function DisplayReviews() {
  const reviews = [
    {
      name: "Alex",
      rating: 5,
      description: "Amazing host. Would recommened!",
    },
    {
      name: "Suraj",
      rating: 4,
      description: "The best experience ever!",
    },
    {
      name: "Patrick",
      rating: 1,
      description: "Terrible!",
    },
    {
      name: "Karwan",
      rating: 3,
      description: "I really don't know!",
    },
  ];

  return (
    <div>
      {reviews.map((review, index) => {
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
      })}
    </div>
  );
}
