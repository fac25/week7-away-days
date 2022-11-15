// React
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// AWS, Auth, Storage
import { DataStore } from "@aws-amplify/datastore";
import { Accommodation, Events, Profile } from "./models";

// Components / Pages
import Layout from "./components/Layout.js";
import Authenticate from "./pages/Authenticate.js";
import AboutUs from "./pages/AboutUs.js";
import Contact from "./pages/Contact.js";
import MyProfile from "./pages/MyProfile.js";
import Email from "./components/Email";
import Footer from "./components/Footers.js";
import LandingPage from "./pages/LandingPage.js";
import Search from "./pages/Search.js";

import CreateEvent from "./components/event/CreateEvent";
import CurrentEvent from "./components/event/CurrentEvent.js";

import CreateAccommodation from "./components/accommodation/CreateAccommodation";

import CreateReview from "./components/reviews/CreateReview";
import DisplayReviews from "./components/reviews/DisplayReviews";

import CreateProfile from "./components/profile/CreateProfile";
import DisplayProfile from "./components/profile/DisplayProfile";

import EditProfile from "./pages/EditProfile";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Start of layout route */}
          <Route path="/" element={<Layout user={user} setUser={setUser} />}>
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/my-profile/edit-profile"
              element={<EditProfile user={user} />}
            />

            <Route
              path="/current-event/:id"
              element={<CurrentEvent Events={Events} DataStore={DataStore} />}
            />
            <Route path="/display-reviews" element={<DisplayReviews />} />

            <Route
              path="/display-profile"
              element={
                <DisplayProfile Profile={Profile} DataStore={DataStore} />
              }
            />
            <Route path="/email" element={<Email />} />
            <Route path="/search" element={<Search />} />
          </Route>
          {/* End of Layout route */}
          <Route path="/landing-page" element={<LandingPage />} />
          <Route
            path="/authenticate"
            element={<Authenticate setUser={setUser} />}
          />

          {/* Create */}
          {user && (
            <>
            <Route path="/my-profile" element={<MyProfile user={user} />} />
              <Route
                path="/create-event"
                element={
                  <CreateEvent
                    User={user}
                    Events={Events}
                    DataStore={DataStore}
                  />
                }
              />
              <Route
                path="/create-profile"
                element={
                  <CreateProfile Profile={Profile} DataStore={DataStore}  user={user}/>
                }
              />
              <Route path="/create-review" element={<CreateReview user={user}/>} />
              <Route
                path="/create-accommodation"
                element={
                  <CreateAccommodation
                    Accommodation={Accommodation}
                    DataStore={DataStore}
                    user={user}
                  />
                }
              />
            </>
          )}
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
