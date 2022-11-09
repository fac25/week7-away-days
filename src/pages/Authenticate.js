//Add Auth
import { withAuthenticator, Button } from "@aws-amplify/ui-react"
import "@aws-amplify/ui-react/styles.css"
import { Navigate } from "react-router-dom"

function Authenticate({ user, setUser }) {
  return <>{user && setUser(user) && <Navigate to="/" />}</>
}

export default withAuthenticator(Authenticate)
