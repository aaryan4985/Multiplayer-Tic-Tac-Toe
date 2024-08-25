import React, { useState, useSyncExternalStore } from "react";
import Axios from "axios";
import Cookies from "universal-cookie";

function SignUp() {
  const cookies = new Cookies();
  const [user, setUser] = useState(null);
  const signUp = () => {
    Axios.post("http://localhost:3001/signup", user).then((res) => {
      const { token, userID, firstName, lastName, username, hashedPassword } =
        res.data();
      cookies.set("token", token);
      cookies.set("userID", userID);
      cookies.set("firstName", firstName);
      cookies.set("lastName", lastName);
      cookies.set("username", username);
      cookies.set("hashedPassword", hashedPassword);
    });
  };
  return (
    <div className="signUp">
      <label>Sign up</label>
      <input
        placeholder="First Name"
        onChange={(event) => {
          setUser({ ...user, firstName: event.target.value });
        }}
      />
      <input
        placeholder="Last Name"
        onChange={(event) => {
          setUser({ ...user, lastName: event.target.value });
        }}
      />
      <input
        placeholder="User Name"
        onChange={(event) => {
          setUser({ ...user, userName: event.target.value });
        }}
      />
      <input
        placeholder="Password"
        onChange={(event) => {
          setUser({ ...user, password: event.target.value });
        }}
      />
      <button onClick={signUp}>Sign Up</button>
    </div>
  );
}

export default SignUp;
