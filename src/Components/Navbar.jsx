import React, { useState } from "react";

export default function Navbar() {
  const [user, setUser] = useState({ Name: "", Password: "" });
  const [loggedIn, setLoggedIn] = useState(false);
  console.log("Login Details", user);
  console.log("Login State", loggedIn);
  // Username Grab
  const loginSubmit = (event) => {
    event.preventDefault();
    setUser({
      Name: event.target.username.value,
      Password: event.target.password.value,
    });
    setLoggedIn(true);
    // localStorage.setItem("currentUser", event.target.username.value);
  };

  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <div className="col-md-9">
          <span className="navbar-brand mb-0">Hiragana / Katakana</span>
        </div>
        {/* Login Form */}
        {!loggedIn && (
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
          </form>
        )}
        {loggedIn && (
          <div>
            <p>Current User: {user.Name}</p>
            <button
              type="submit"
              className="btn btn-secondary"
              onClick={() => setLoggedIn(false)}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
