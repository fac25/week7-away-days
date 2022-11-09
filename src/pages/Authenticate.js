//Add Auth
import { withAuthenticator, Button } from "@aws-amplify/ui-react"
import "@aws-amplify/ui-react/styles.css"
import { useEffect } from "react"
import { Navigate } from "react-router-dom"

function Authenticate({ user, setUser }) {
  useEffect(() => user && setUser(user))
  return <>{user && <Navigate to="/" />}</>
}

export default withAuthenticator(Authenticate)
