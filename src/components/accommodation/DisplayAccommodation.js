import { useState, useEffect } from "react";
import { Accommodation } from "../../models";
import { DataStore } from "aws-amplify";
import Image from '../Image'

const DisplayAccommodation = ({ eventId }) => {
  const [accommodation, setAccommodation] = useState();

  useEffect(() => {
    const getAccommodation = async () => {
      const accommodation = await DataStore.query(Accommodation, (item) =>
        item.EventID("eq", eventId)
      );
      setAccommodation(accommodation[0]);
    };

    getAccommodation();
  });

  return (
    <div>
      <h1>Accommodation</h1>
      {accommodation ? (
        <div className="card">
          <h3>{accommodation.location}</h3>
          {accommodation.img.map((image, index) => (
            <Image key={`accommodation-image[$index]`} src={image} alt="test" />
          ))}
          <p>Accommodation Description: {accommodation.description}</p>
          <p>Facilities: {accommodation.facilities?.join(", ")}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default DisplayAccommodation;
