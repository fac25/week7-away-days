import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.js";
import SignUp from "./pages/SignUp.js";
import Login from "./pages/Login.js";
import AboutUs from "./pages/AboutUs.js";
import Contact from "./pages/Contact.js";
import MyProfile from "./pages/MyProfile.js";
import CreateEvent from "./pages/CreateEvent.js";
import SearchBar from "./components/SearchBar";
import { DataStore } from "@aws-amplify/datastore";
import { Users, Accommodation, Events, Profile, Reviews } from "./models";

// AWS Create User ------------------------------
async function addUser() {
  // await DataStore.save(
  //   new Users({
  //     name: "Suraj",
  //     lastname: "Pun",
  //     email: "test12@outlook.com",
  //     password: "123",
  //   })
  // );
  const models = await DataStore.query(Reviews);

  console.log(models);
}

// -------------------------------- DELETE STUFF
// async function deleteStuff() {
//   const models = await DataStore.query(
//     Events,
//     "aad188b0-a3fb-4be3-944f-7f31e3da1bfd"
//   );
//   DataStore.delete(models);
// }

// --------------------------------- MAIN APP

function App() {
  return (
    <div className="App">
      <button onClick={addUser}>Create User</button>
      {/* <button onClick={deleteStuff}>Delete</button> */}

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
    </div>
  );
}

export default App;
