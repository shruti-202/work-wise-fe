import React from "react";
import { errorAlert } from "../utils/alert";
import { useRef } from "react";

function RegisterUserPage() {
  const name = useRef();
  const phone = useRef();
  const email = useRef();
  const username = useRef();
  const password = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const nameVal = name.current.value;
    const phoneVal = phone.current.value;
    const emailVal = email.current.value;
    const usernameVal = username.current.value;
    const passwordVal = password.current.value;

    const emailFormat = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const usernameFormat = /^[A-Za-z][A-Za-z0-9_]{1,29}$/;
    const passwordFormat =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,15}$/;

    if (nameVal.length < 2 || nameVal.length > 50) {
      errorAlert("Invalid Name");
      return;
    }
    if (phoneVal < 1000000000) {
      errorAlert("Invalid Phone Number");
      return;
    }
    if (!emailFormat.test(emailVal)) {
      errorAlert("Invalid Email Address");
      return;
    }
    if (!usernameFormat.test(usernameVal)) {
      errorAlert("Invalid User-Name");
      return;
    }
    if (!passwordFormat.test(passwordVal)) {
      errorAlert(
        "Password requires: 1 number, 1 uppercase, 1 lowercase, 1 special, 6+ characters"
      );
      return;
    }
  };
  return (
    <div className="register">
      <div className="register-container">
        <div className="register-form">
          <h1>Sign Up</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="input-field"
              placeholder="Full Name"
              ref={name}
              required
            />
            <input
              type="number"
              className="input-field"
              placeholder="Phone No"
              ref={phone}
              required
            />
            <input className="input-field" placeholder="Email" ref={email} required />
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
            <button>Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterUserPage;
