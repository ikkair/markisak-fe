import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CreateRecipe from './Pages/Dashboard/CreateRecipe/CreateRecipe';
import ForgotPassword from './Pages/ForgotPassword/ForgotPassword';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
<<<<<<< HEAD
import Profile from './Pages/Profile/Profile';
=======
import Register from './Pages/Register/Register';
>>>>>>> aec53033638defc3703d781c97ba96ad2fbb5198

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard/create-recipe" element={<CreateRecipe />} />
      <Route path="/login" element={<Login/>} />
<<<<<<< HEAD
      <Route path="/profile" element={<Profile/>} />
=======
      <Route path="/register" element={<Register/>} />
      <Route path="/forgotpassword" element={<ForgotPassword/>} />

>>>>>>> aec53033638defc3703d781c97ba96ad2fbb5198

    </Routes>
  );
}

export default App;
