import React from "react";
import { useRef } from "react";
import { successAlert, errorAlert } from "../utils/alert";

function LoginUserPage() {
  const username = useRef();
  const password = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const usernameVal = username.current.value;
    const passwordVal = password.current.value;

    console.log(usernameVal, passwordVal);

    const response = await fetch("http://localhost:3000/api/v1/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: usernameVal,
        password: passwordVal,
      }),
      credentials: "include",
    });
    const data = await response.json();
    if (response.ok) {
      successAlert(data.success);
    } else {
      errorAlert(data.error);
    }
  };

  return (
    <div className="login">
      <div className="login-container">
        <div className="login-form">
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="input-field"
              placeholder="User Name"
              ref={username}
              required
            />
            <input
              type="password"
              className="input-field"
              placeholder="Password"
              ref={password}
              required
            />
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginUserPage;
