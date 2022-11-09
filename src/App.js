// React
import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
// Components
import Layout from "./components/Layout.js"

// Pages
import Authenticate from "./pages/Authenticate.js"
import AboutUs from "./pages/AboutUs.js"
import Contact from "./pages/Contact.js"
import MyProfile from "./pages/MyProfile.js"
import CreateEvent from "./pages/CreateEvent.js"

function App() {
  const [user, setUser] = useState(null)

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout user={user} setUser={setUser} />}>
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/my-profile" element={<MyProfile />} />
            <Route path="/create-event" element={<CreateEvent />} />
          </Route>
          <Route
            path="/authenticate"
            element={<Authenticate setUser={setUser} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
