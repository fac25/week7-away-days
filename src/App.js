import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.js";
import Authenticate from "./pages/Authenticate.js";
import AboutUs from "./pages/AboutUs.js";
import Contact from "./pages/Contact.js";
import MyProfile from "./pages/MyProfile.js";
import CreateEvent from "./pages/CreateEvent.js";
import SearchBar from "./components/SearchBar";
import { DataStore } from "@aws-amplify/datastore";
import DisplayReviews from "./components/DisplayReviews.js";
import { Users, Accommodation, Events, Profile, Reviews } from "./models";

// Add Auth
// import { withAuthenticator } from "@aws-amplify/ui-react";

// AWS Create User ------------------------------
async function addUser() {
  // Create User
  // await DataStore.save(
  //   new Users({
  //     name: "Suraj",
  //     lastname: "Pun",
  //     email: "test12@outlook.com",
  //     password: "123",
  //   })
  // );
  const models = await DataStore.query(Users);
  const modelsAccommodation = await DataStore.query(Accommodation);
  const modelsEvents = await DataStore.query(Events);
  const modelsProfile = await DataStore.query(Profile);
  const modelsReviews = await DataStore.query(Reviews);

  console.log(
    models,
    modelsAccommodation,
    modelsEvents,
    modelsProfile,
    modelsReviews
  );
}

// -------------------------------- DELETE STUFF
// async function deleteStuff() {
//   const models = await DataStore.query(
//     Users,
//     ""
//   );
//   DataStore.delete(models);
// }

// --------------------------------- MAIN APP

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/my-profile" element={<MyProfile />} />
            <Route path="/create-event" element={<CreateEvent />} />
          </Route>
          <Route path="/authenticate" element={<Authenticate />} />
        </Routes>
      </BrowserRouter>
      {/* <DisplayReviews /> */}
    </div>
  );
}

export default App;
