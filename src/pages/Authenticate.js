//Add Auth
import { withAuthenticator } from "@aws-amplify/ui-react"
import "@aws-amplify/ui-react/styles.css"
import { useEffect } from "react"
import { Navigate } from "react-router-dom"

function Authenticate({ user }) {
  useEffect(() => {user && localStorage.setItem("user", JSON.stringify(user))
  window.location.reload()
})
  return <>{user && <Navigate to="/" />}</>
}

export default withAuthenticator(Authenticate)
