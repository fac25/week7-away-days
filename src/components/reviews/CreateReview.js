import { useState } from "react";

// AWS, Auth, Storage
import { DataStore } from "@aws-amplify/datastore";
import { Reviews } from "../../models";

const CreateReview = () => {
  const [createReview, setCreateReview] = useState({});

  const handleChange = (e) => {
    setCreateReview((prevState) => {
      return { ...prevState, ...{ [e.target.id]: e.target.value } };
    });
  };

  const handleClick = async () => {
    await DataStore.save(
      new Reviews({
        name: createReview.name,
        rating: parseInt(createReview.rating),
        description: createReview.description,
      })
    );
  };

  return (
    <div>
      <h1>Create Event</h1>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" onChange={handleChange} />

      <label htmlFor="rating">Rating</label>
      <input type="text" id="rating" onChange={handleChange} />

      <label htmlFor="description">Description</label>
      <textarea id="description" onChange={handleChange}></textarea>

      <button onClick={handleClick}>Create Event</button>
    </div>
  );
};

export default CreateReview;
