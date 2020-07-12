import React, { useEffect, useState } from "react";

export default function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [userDetail, setUserdata] = useState(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    const userData = {
      userName,
      password,
    };
    setUserdata(userData);
  };
  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <h2>Login</h2>
      <form
        style={{
          display: "grid",
          alignItems: "center",
          justifyItems: "center",
        }}
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="user name"
          onChange={(event) => setUserName(event.target.value)}
        ></input>
        <input
          type="password"
          placeholder="password"
          onChange={(event) => setPassword(event.target.value)}
        ></input>
        <button type="submit">Submit</button>
      </form>
      {userDetail && JSON.stringify(userDetail, null, 2)}
    </div>
  );
}
