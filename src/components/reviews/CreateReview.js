import { useState } from "react";

// AWS, Auth, Storage
import { DataStore } from "@aws-amplify/datastore";
import { Reviews } from "../../models";

const CreateReview = () => {
  const [name, setName] = useState("");
  const [rating, setRating] = useState();
  const [description, setDescription] = useState("");

  const handleChange = (e) => {
    if (e.target.id === "name") {
      setName(e.target.value);
    }
    if (e.target.id === "rating") {
      setRating(e.target.value);
    }

    if (e.target.id === "description") {
      setDescription(e.target.value);
    }
  };

  const handleClick = async () => {
    await DataStore.save(
      new Reviews({
        name: name,
        rating: parseInt(rating),
        description: description,
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
