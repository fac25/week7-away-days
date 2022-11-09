import NavBar from "./NavBar.js"
export default function Layout({ user, setUser }) {
  return (
    <div>
      <NavBar user={user} setUser={setUser} />
    </div>
  )
}
