import { Outlet, Link } from "react-router-dom";
import { Auth } from "aws-amplify";

export default function NavBar({ user, setUser }) {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about-us">About Us</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/search">Search</Link>
        {!user && (
          <>
            <Link to="/authenticate">Login</Link>
            <Link to="/authenticate" onClick={signUp}>Sign Up</Link>
          </>
        )}

        {user && (
          <>
            <Link to="/create-event">Create Event</Link>
            <button onClick={signOut}>Sign Out</button>
          </>
        )}
      </nav>
      <Outlet />
    </div>
  );

  function signUp (){
    localStorage.setItem("signup", "signup")
  }

  async function signOut() {
    try {
      setUser(null);
      localStorage.clear();
      await Auth.signOut();
    } catch (error) {
      console.log("error signing out: ", error);
    }
  }
}
