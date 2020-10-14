import React from "react";

export default function Login(usernameCall) {
  return (
    <form onSubmit={usernameCall} className="col-md-3">
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
        <button type="submit" name="login_submit" className="btn btn-secondary">
          Login2
        </button>
      </div>
    </form>
  );
}
