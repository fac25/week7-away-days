import { useState } from "react";

// AWS, Auth, Storage
import { DataStore } from "@aws-amplify/datastore";
import { Reviews } from "../../models";

const CreateReview = ({ EventID, UserID, setReviews }) => {
  const [currentReview, setCurrentReview] = useState({
    name: "",
    rating: "",
    description: "",
  });

  const handleChange = ({ target }) => {
    setCurrentReview((prevObj) => {
      return { ...prevObj, [target.id]: target.value };
    });
  };

  const handleClick = async () => {
    setReviews((prevReviews) => [...prevReviews, currentReview]);
    await DataStore.save(
      new Reviews({
        name: currentReview.name,
        rating: parseInt(currentReview.rating),
        description: currentReview.description,
        EventID,
        UserID,
      })
    );
    console.log(currentReview.rating);
  };

  return (
    <div className="create-review">
      <h1>Review Event</h1>
      <div className="create-review-wrapper">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" onChange={handleChange} />

        <label htmlFor="rating">Rating</label>
        <input
          type="number"
          min={1}
          max={5}
          placeholder="Enter a number between 1-5"
          id="rating"
          onChange={handleChange}
        />

        <label htmlFor="description">Description</label>
        <textarea id="description" onChange={handleChange}></textarea>

        <button onClick={handleClick}>Create Review</button>
      </div>
    </div>
  );
};

export default CreateReview;
