import { useState, useEffect } from "react";

const DisplayAccommodation = ({ Accommodation, DataStore }) => {
  const [accommodation, setAccommodation] = useState();

  useEffect(() => {
    const getAccommodation = async () => {
      const accommodation = await DataStore.query(
        Accommodation,
        "b7ca1446-a618-433c-94d8-bb1eec0d568e"
      );
      setAccommodation(accommodation);
    };

    getAccommodation();
  }, [Accommodation, DataStore]);

  return (
    <div>
      <h1>Show Accommodation</h1>

      {accommodation ? (
        <div className="card">
          <h3>{accommodation.location}</h3>
          <img src="" alt="test" />
          <span>Facilities: {accommodation.facilities.join(", ")}</span>
        </div>
      ) : (
        <p>Loadding</p>
      )}
    </div>
  );
};

export default DisplayAccommodation;
