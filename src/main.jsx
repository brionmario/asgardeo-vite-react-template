import React from "react"
import ReactDOM from "react-dom/client"
import { AuthProvider } from "@asgardeo/auth-react";
import App from "./App.jsx";
import "./index.css";

const asgardeoAuthConfig = {
    signInRedirectURL: "http://localhost:5173",
    signOutRedirectURL: "http://localhost:5173",
    clientID: "{{ tmplr.asgardeo_clientID }}",
    baseUrl: "https://api.asgardeo.io/t/{{ tmplr.asgardeo_org_name }}",
    scope: [ "openid", "profile" ]
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider config={ asgardeoAuthConfig }>
        <App />
    </AuthProvider>
  </React.StrictMode>,
)
