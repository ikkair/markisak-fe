import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CreateRecipe from './Pages/Dashboard/CreateRecipe/CreateRecipe';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard/create-recipe" element={<CreateRecipe />} />
      <Route path="/login" element={<Login/>} />

    </Routes>
  );
}

export default App;
