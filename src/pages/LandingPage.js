import SearchBar from "../components/SearchBar";
import { Outlet, Link } from "react-router-dom";


export default function LandingPage() {
  return (
    <div>
      <h1>Away Days</h1>
      <p>Travel, share experiences, enjoy sports together</p>
      <SearchBar />
      <Link to="/authenticate">Login</Link>
      <Link to="/authenticate">Sign Up</Link>
    </div>
  );
}
