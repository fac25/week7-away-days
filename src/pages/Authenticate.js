//Add Auth
import { withAuthenticator, Button } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

function Authenticate({ signOut, user }) {
  return (
    <div>
      <Button onClick={signOut}>Sign out</Button>
    </div>
  );
}

export default withAuthenticator(Authenticate);
