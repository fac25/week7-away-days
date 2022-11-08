import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// AWS
import { Amplify } from "aws-amplify";
import awsconfig from "./aws-exports";
import { AmplifyProvider } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

Amplify.configure(awsconfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AmplifyProvider>
      <App />
    </AmplifyProvider>
  </React.StrictMode>
);
