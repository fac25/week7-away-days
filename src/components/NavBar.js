import { Outlet, Link, useNavigate } from "react-router-dom";
import { Auth } from "aws-amplify";

export default function NavBar({ user, setUser }) {
  const navigate = useNavigate();
  return (
    <div>
      <nav>
        <ul>
          <div className="left">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about-us">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
            {user && (
              <div className="user-logged-in">
                <li>
                  <Link to={`/display-profile/${user.username}`}>
                    My Profile
                  </Link>
                </li>
                <li>
                  <Link to="/create-event">Create Event</Link>
                </li>
              </div>
            )}
          </div>
          {!user ? (
            <div className="right">
              <li>
                <Link to="/authenticate">Login</Link>
              </li>
              <li>
                <Link to="/authenticate" onClick={signUp}>
                  Sign Up
                </Link>
              </li>
            </div>
          ) : (
            <li>
              <Link onClick={signOut}>Sign Out</Link>
            </li>
          )}
        </ul>
      </nav>
      <Outlet />
    </div>
  );

  function signUp() {
    localStorage.setItem("signup", "signup");
  }

  async function signOut() {
    try {
      setUser(null);
      localStorage.clear();
      await Auth.signOut();
      navigate("/");
    } catch (error) {
      console.log("error signing out: ", error);
    }
  }
}
