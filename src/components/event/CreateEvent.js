import { useState } from "react";
import { Storage } from "aws-amplify";
import { useNavigate, Link } from "react-router-dom";
import { Accommodation, Events } from "../../models";
import { DataStore } from "aws-amplify";
import CreateAccommodation from "../accommodation/CreateAccommodation";

const CreateEvent = ({ User }) => {
  const navigate = useNavigate();
  const [createEvent, setCreateEvent] = useState();
  const [checkDate, setCheckDate] = useState(false);
  const [eventImg, setEventImg] = useState("");
  const [accommodation, setAccommodation] = useState({
    location: "",
    facilities: "",
    description: "",
  });

  const handleChange = (e) => {
    setCheckDate(false);
    setCreateEvent((prevState) => {
      return { ...prevState, ...{ [e.target.id]: e.target.value } };
    });
  };

  const imgKey = eventImg + User.username;

  const handleClick = async () => {
    if (createEvent.endDate >= createEvent.startDate) {
      setCheckDate(false);
      const newEvent = await DataStore.save(
        new Events({
          name: createEvent.name,
          sport: createEvent.sport,
          img: imgKey,
          startDate: createEvent.startDate,
          endDate: createEvent.endDate,
          description: createEvent.description,
          location: createEvent.location,
          UserID: User.username,
        })
      );
      await DataStore.save(
        new Accommodation({
          location: accommodation.location,
          facilities: accommodation.facilities,
          description: accommodation.description,
          img: accommodation.img,
          EventID: newEvent.id,
          UserID: newEvent.UserID,
        })
      );
    } else setCheckDate(true);
    // navigate(`/display-profile/${User.username}`);
  };

  // Img
  async function handleImg(e) {
    const file = e.target.files[0];
    setEventImg(file.name + `${Date.now().toString()}`);

    await Storage.put(
      file.name + `${Date.now().toString()}` + User.username,
      file
    );
  }

  return (
    <div className="create-event">
      <form action="">
        <h1>Create Event</h1>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" onChange={handleChange} />

        <label htmlFor="sport">Sport</label>
        <input type="text" id="sport" onChange={handleChange} />

        <label htmlFor="upload image">Upload image:</label>
        <input type="file" onChange={handleImg} />

        <div className="date-wrapper">
          <div>
            <label htmlFor="start-date">Start Date</label>
            <input type="date" id="startDate" onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="end-date">End Date</label>
            <input type="date" id="endDate" onChange={handleChange} />
          </div>
        </div>
        {checkDate ? <p>end date should be after start date</p> : <></>}

        <label htmlFor="description">Description</label>
        <textarea id="description" onChange={handleChange}></textarea>

        <label htmlFor="location">Location</label>
        <input type="text" id="location" onChange={handleChange} />
        {/* <CreateAccommodation setAccommodation={setAccommodation} /> */}
        <Link to={`/display-profile/${User.username}`}onClick={handleClick}>Create Event</Link>
      </form>
    </div>
  );
};

export default CreateEvent;
