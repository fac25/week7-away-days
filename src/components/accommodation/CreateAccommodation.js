import { useEffect, useState } from "react";
import UploadImg from "../UploadImg";

const CreateAccommodation = ({ setAccommodation }) => {
  const [imageFileName, setImageFileName] = useState("");

  useEffect(() => {
    setAccommodation((prevObj) => {
      return { ...prevObj, img: imageFileName };
    });
  }, [imageFileName]);

  const handleChange = ({ target }) => {
    setAccommodation((prevObj) => {
      return { ...prevObj, [target.id]: target.value };
    });
  };

  return (
    <div>
      <h1>Create Accommodation</h1>
      <label htmlFor="location">Location</label>
      <input type="text" id="location" onChange={handleChange} />

      <label htmlFor="facilities">Facilities</label>
      <input type="text" id="facilities" onChange={handleChange} />

      <label htmlFor="description">Description</label>
      <textarea id="description" onChange={handleChange}></textarea>
      <UploadImg updateFileName={setImageFileName} />
    </div>
  );
};

export default CreateAccommodation;
