import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.js";
import SignUp from "./pages/SignUp.js";
import Login from "./pages/Login.js";
import AboutUs from "./pages/AboutUs.js";
import Contact from "./pages/Contact.js";
import MyProfile from "./pages/MyProfile.js";
import CreateEvent from "./pages/CreateEvent.js";

import { DataStore } from "@aws-amplify/datastore";
import { USERS } from "./models";

function App() {
  async function addData() {
    await DataStore.save(
      new USERS({
        name: "S",
        lastname: "P",
        email: "test12346789@testemailtestemail.com",
      })
    );
    const models = await DataStore.query(USERS);
    console.log(models);
  }

  return (
    <div className="App">
      <h1>Away Days</h1>
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
