import React from "react";
import styles from './Google.module.css';
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

const GoogleLoginCustom = () => {
  return (
    <div className={styles.myButton}>
      <GoogleOAuthProvider clientId="">
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            const jwt = credentialResponse.credential;
            const decoded = jwtDecode(jwt);
            const email = decoded.email;
            sessionStorage.setItem("userEmail", email);
          }}
          onError={() => {
            console.log("Login Failed");
          }}
          useOneTap
        />
      </GoogleOAuthProvider>
    </div>
  );
};

export default GoogleLoginCustom;
