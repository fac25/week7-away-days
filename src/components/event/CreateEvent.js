import { useState } from "react";
import { Storage } from "aws-amplify";
import { useNavigate } from "react-router-dom";

const CreateEvent = ({ User, Events, DataStore }) => {
  const [createEvent, setCreateEvent] = useState();
  const [checkDate, setCheckDate] = useState(false);

  // Img
  const [img, setImg] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCheckDate(false);
    setCreateEvent((prveState) => {
      return { ...prveState, ...{ [e.target.id]: e.target.value } };
    });
  };

  const imgKey = img + User.username;

  const handleClick = async () => {
    if (createEvent.endDate >= createEvent.startDate) {
      setCheckDate(false)
      await DataStore.save(
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
    }else(
      setCheckDate(true)
    )

    // const event = await DataStore.query(Events);
    // console.log(JSON.parse(localStorage.getItem("user")));

    // navigate("/my-profile");
  };

  // Img
  async function handleImg(e) {
    const file = e.target.files[0];
    setImg(file.name + `${Date.now().toString()}`);

    await Storage.put(
      file.name + `${Date.now().toString()}` + User.username,
      file
    );
  }

  return (
    <div>
      <h1>Create Event</h1>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" onChange={handleChange} />

      <label htmlFor="sport">Sport</label>
      <input type="text" id="sport" onChange={handleChange} />

      <input type="file" onChange={handleImg} />

      <label htmlFor="start-date">Start Date</label>
      <input type="date" id="startDate" onChange={handleChange} />

      <div>
        <label htmlFor="end-date">End Date</label>
        <input type="date" id="endDate" onChange={handleChange} />
        {checkDate ? <p>end date should be after start date</p> : <></>}
      </div>

      <label htmlFor="description">Description</label>
      <textarea id="description" onChange={handleChange}></textarea>

      <label htmlFor="location">Location</label>
      <input type="text" id="location" onChange={handleChange} />

      <button onClick={handleClick}>Create Event</button>
    </div>
  );
};

export default CreateEvent;
