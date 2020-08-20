import React, { useState } from "react";
// import Login from "./Login";

export default function Navbar() {
  const [user, setUser] = useState("");

  // Username Grab
  const loginSubmit = (event) => {
    event.preventDefault();
    setUser(event.target.username.value);
    // localStorage.setItem("currentUser", event.target.username.value);
    // console.log("Data", user);
  };

  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <div className="col-md-9">
          <span className="navbar-brand mb-0">Hiragana / Katakana</span>
        </div>

        <form
          onSubmit={(event) => {
            loginSubmit(event);
          }}
          className="col-md-3"
        >
          <div className="input-group input-group-sm">
            <input
              className="form-control mr-2"
              type="text"
              name="username"
              placeholder="Username"
              aria-label="Username"
            />
            <input
              className="form-control mr-2"
              type="text"
              name="password"
              placeholder="Password"
              aria-label="Password"
            />
            <button
              type="submit"
              name="login_submit"
              className="btn btn-secondary"
            >
              Login
            </button>
          </div>
          <p>WIP: Current User: {user}</p>
        </form>
      </div>
    </nav>
  );
}
