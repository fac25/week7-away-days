import { Outlet, Link } from "react-router-dom";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about-us">About Us</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/">Away Days</Link>
        <Link to="/login">Login</Link>
        <Link to="/sign-up">Sign Up</Link>
        <Link to="/my-profile">My Profile</Link>
        <Link to="/create-event">Create Event</Link>
        <Link to="/">Sign Out</Link>
      </nav>
      <Outlet />
    </div>
  );
}

//Hamburger: Home, Contact, About us
