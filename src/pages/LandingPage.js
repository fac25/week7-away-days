import "../styles/LandingPage.scss";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div>
      <h1>Away Days</h1>
      <p>Travel, share experiences, enjoy sports together</p>
      <Link className="redirect-link" to="/search">
        Find your next experience
      </Link>
      <div className="account-buttons">
        <Link to="/authenticate">Login</Link>
        <Link to="/authenticate">Sign Up</Link>
      </div>
    </div>
  );
}
