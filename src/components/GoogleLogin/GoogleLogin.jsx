import React from 'react';
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

const GoogleLoginCustom = () => {
    return (
        <GoogleOAuthProvider clientId="1082635464334-nknq7hmute21rql7j5dk26nl7sadf0hn.apps.googleusercontent.com">
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            console.log(credentialResponse.credential);
            const jwt = credentialResponse.credential;
            const decoded = jwtDecode(jwt);
            const email = decoded.email;
            console.log(email);
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      </GoogleOAuthProvider>
    );
};

export default GoogleLoginCustom;