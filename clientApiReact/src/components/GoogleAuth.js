import React from 'react'
import { GoogleLogin } from "react-google-login";
const GoogleAuth = (props) => {
    return (
        <div>
             <div style={{ marginTop: "200px", textAlign: "center" }}>
            <h3>Welcome</h3>
            <p>Sign in to your account</p>

            <GoogleLogin
              clientId="297117454527-1qi5ak2menh3rdim37jpus7t18rjpn2p.apps.googleusercontent.com"
              buttonText="Login with google"
              onSuccess={props.responseGoogleS}
              onFailure={props.responseGoogleF}
              cookiePolicy={"single_host_origin"}
            />
          </div>
        </div>
    )
}

export default GoogleAuth
