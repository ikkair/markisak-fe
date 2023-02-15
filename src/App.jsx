import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CreateRecipe from './Pages/Dashboard/CreateRecipe/CreateRecipe';
import ForgotPassword from './Pages/ForgotPassword/ForgotPassword';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard/create-recipe" element={<CreateRecipe />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/forgotpassword" element={<ForgotPassword/>} />


    </Routes>
  );
}

export default App;
