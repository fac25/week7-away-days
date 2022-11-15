import NavBar from "./NavBar.js";
import LandingPage from "../pages/LandingPage.js";
// import { useNavigate } from "react-router-dom";
export default function Layout({ user, setUser }) {
  // const navigate = useNavigate();

  return (
    <div>
      {!user ? <LandingPage /> : <NavBar user={user} setUser={setUser} />}
    </div>
  );
}
