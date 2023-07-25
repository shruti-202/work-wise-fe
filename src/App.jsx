import React from 'react'
import {Routes,Route} from "react-router-dom";
import HomePage from './pages/HomePage';
import LoginUserPage from './pages/LoginUserPage';
import RegisterUserPage from './pages/RegisterUserPage';
import UserProfiePage from './pages/UserProfiePage';
import MainLayout from './layouts/MainLayout';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<LoginUserPage/>}/>
        <Route path="/register" element={<RegisterUserPage/>}/>
        <Route path="/profile" element={<UserProfiePage/>}/>
        </Route>
        
      </Routes>
    </div>
  )
}

export default App
