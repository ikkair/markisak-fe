import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CreateRecipe from './Pages/Dashboard/CreateRecipe/CreateRecipe';
import Home from './Pages/Home/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard/create-recipe" element={<CreateRecipe />} />
    </Routes>
  );
}

export default App;
