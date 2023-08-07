import React from 'react'
import "./Header.css"
import Logo from "../../../assets/owl.png"
import {Link} from "react-router-dom";

function Header() {
  return (
    <div>
      <header>
        <div className="header-container">
          <div className="header-left">
        <div className="header-brand">
          <img src={Logo} alt="logo"/>
          <h3>Work Wise</h3>
        </div>
          </div>
          <div className="header-right">
           <div className="header-login">
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
           </div>
          </div>
        </div>
      </header>
      
    </div>
  )
}

export default Header
