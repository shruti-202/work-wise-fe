import React from "react";

function RegisterUserPage() {
  return (
    <div className="register">
      <div className="register-container">
        <div className="register-form">
          <h1>Sign Up</h1>
          <form action="">
            <input type="text" className="input-field"  placeholder="Full Name" required/>
            <input type="number" className="input-field" placeholder="Phone No" required/>
            <input type="email" className="input-field" placeholder="Email" required/>
            <input type="text" className="input-field" placeholder="User Name" required/>
            <input type="password" className="input-field" placeholder="Password" required/>
            <button>Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterUserPage;
