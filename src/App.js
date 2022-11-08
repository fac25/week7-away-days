// React
import { BrowserRouter, Routes, Route } from "react-router-dom";

// AWS, Auth, Storage
// import { DataStore } from "@aws-amplify/datastore";
// import { Users, Accommodation, Events, Profile, Reviews } from "./models";

// Components
import Layout from "./components/Layout.js";

// Pages
import Authenticate from "./pages/Authenticate.js";
import AboutUs from "./pages/AboutUs.js";
import Contact from "./pages/Contact.js";
import MyProfile from "./pages/MyProfile.js";
import CreateEvent from "./pages/CreateEvent.js";

// --------------------------------- MAIN APP ---------------------------------
// ----------------------------------------------------------------------------

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
    </div>
  );
}

export default App;
