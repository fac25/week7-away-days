import NavBar from "./NavBar.js";

// import { useNavigate } from "react-router-dom";
export default function Layout({ user, setUser }) {
  
  return (
    <div>
      <NavBar user={user} setUser={setUser} />
    </div>
  );
}
