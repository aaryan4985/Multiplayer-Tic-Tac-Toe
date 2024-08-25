import React, { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    // Implement your login logic here
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <div className="login">
      <label>Login</label>
      <input
        type="text"
        placeholder="User Name"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button onClick={login}>Login</button>
    </div>
  );
}

export default Login;
