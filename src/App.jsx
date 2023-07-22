import React from 'react'
import {Routes,Route} from "react-router-dom";
import HomePage from './pages/HomePage';
import LoginUserPage from './pages/LoginUserPage';
import RegisterUserPage from './pages/RegisterUserPage';
import UserProfiePage from './pages/UserProfiePage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<LoginUserPage/>}/>
        <Route path="/register" element={<RegisterUserPage/>}/>
        <Route path="/profile" element={<UserProfiePage/>}/>
      </Routes>
    </div>
  )
}

export default App
