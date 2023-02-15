import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CreateRecipe from './Pages/Dashboard/CreateRecipe/CreateRecipe';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Profile from './Pages/Profile/Profile';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard/create-recipe" element={<CreateRecipe />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/profile" element={<Profile/>} />

    </Routes>
  );
}

export default App;
