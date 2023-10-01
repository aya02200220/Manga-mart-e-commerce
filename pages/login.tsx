import React, { useEffect } from "react";
import { auth, provider } from "../components/firebase";
import { signInWithRedirect, getRedirectResult } from "firebase/auth";

function App() {
  useEffect(() => {
    getRedirectResult(auth)
      .then((result) => {
        if (result && result.user) {
          console.log("Logged in as:", result.user.displayName);
        }
      })
      .catch((error) => {
        console.error("Login error:", error.message);
      });
  }, []);

  const handleLogin = () => {
    signInWithRedirect(auth, provider).catch((error) => {
      console.error("Login error:", error.message);
    });
  };

  return (
    <div>
      <button onClick={handleLogin}>Login with Google</button>
    </div>
  );
}

export default App;
