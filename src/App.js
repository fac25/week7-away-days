// React
import { BrowserRouter, Routes, Route } from "react-router-dom";

// AWS, Auth, Storage
import { DataStore } from "@aws-amplify/datastore";
import { withAuthenticator } from "@aws-amplify/ui-react";

// Components
import Layout from "./components/Layout.js";
import SearchBar from "./components/SearchBar";
import DisplayReviews from "./components/DisplayReviews.js";

// Pages
import SignUp from "./pages/SignUp.js";
import Login from "./pages/Login.js";
import AboutUs from "./pages/AboutUs.js";
import Contact from "./pages/Contact.js";
import MyProfile from "./pages/MyProfile.js";
import CreateEvent from "./pages/CreateEvent.js";

// AWS Table
import { Users, Accommodation, Events, Profile, Reviews } from "./models";
import UploadImg from "./components/UploadImg.js";

// --------------------------------- AWS Create User Function ---------------------------------
// --------------------------------------------------------------------------------------------
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

// ------- DELETE DATA -------
// async function deleteStuff() {
//   const models = await DataStore.query(
//     Users,
//     ""
//   );
//   DataStore.delete(models);
// }

// --------------------------------- MAIN APP ---------------------------------
// ----------------------------------------------------------------------------

function App({ signOut, user }) {
  return (
    <div className="App">
      {/* ------------------------------AWS TESTING--------------------------------- */}
      {/* -------------------------------------------------------------------------- */}
      <UploadImg />

      {/* AWS Data */}
      <button onClick={addUser}>Create User / Console.Log</button>
      {/* <button onClick={deleteStuff}>Delete Data</button> */}

      {/* AWS Auth */}
      {user.attributes.email}
      <button onClick={signOut}>Sign out</button>

      {/* -------------------------------------------------------------------------- */}
      {/* -------------------------------------------------------------------------- */}

      <h1>Away Days</h1>
      <SearchBar />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/my-profile" element={<MyProfile />} />
            <Route path="/create-event" element={<CreateEvent />} />
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
      <DisplayReviews />
    </div>
  );
}

export default withAuthenticator(App);
