// React
import { BrowserRouter, Routes, Route } from "react-router-dom";

// AWS, Auth, Storage
import { DataStore } from "@aws-amplify/datastore";
import { Users, Accommodation, Events, Profile, Reviews } from "./models";

// Components
import Layout from "./components/Layout.js";

// Pages
import Authenticate from "./pages/Authenticate.js";
import MyProfile from "./pages/MyProfile.js";

import CreateEvent from "./components/event/CreateEvent";
import CurrentEvents from "./components/event/CurrentEvent.js";

import CreateAccommodation from "./components/accommodation/CreateAccommodation";
import DisplayAccommodation from "./components/accommodation/DisplayAccommodation";

import CreateReview from "./components/reviews/CreateReview";
import DisplayReviews from "./components/reviews/DisplayReviews";

import CreateProfile from "./components/profile/CreateProfile";
import DisplayProfile from "./components/profile/DisplayProfile";

import Email from "./components/Email";
import AboutUs from "./pages/AboutUs.js";
import Contact from "./pages/Contact.js";
import Footer from "./components/Footers.js";

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
            <Route
              path="/create-event"
              element={<CreateEvent Events={Events} DataStore={DataStore} />}
            />
            <Route
              path="/current-events"
              element={<CurrentEvents Events={Events} DataStore={DataStore} />}
            />
            <Route
              path="/create-accommodation"
              element={
                <CreateAccommodation
                  Accommodation={Accommodation}
                  DataStore={DataStore}
                />
              }
            />
            <Route
              path="/display-accommodation"
              element={
                <DisplayAccommodation
                  Accommodation={Accommodation}
                  DataStore={DataStore}
                />
              }
            />

            <Route path="/create-review" element={<CreateReview />} />
            <Route path="/display-reviews" element={<DisplayReviews />} />

            <Route
              path="/create-profile"
              element={
                <CreateProfile Profile={Profile} DataStore={DataStore} />
              }
            />
            <Route
              path="/display-profile"
              element={
                <DisplayProfile Profile={Profile} DataStore={DataStore} />
              }
            />

            <Route path="/email" element={<Email />} />
          </Route>
          <Route path="/authenticate" element={<Authenticate />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
