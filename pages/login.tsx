import React from "react";
import { auth, provider } from "../components/firebase";
import { signInWithPopup } from "firebase/auth";

function App() {
  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log("Logged in as:", user.displayName);
      })
      .catch((error) => {
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
