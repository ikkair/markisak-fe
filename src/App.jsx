import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CodeResetPassword from './Pages/CodeResetPassword/CodeResetPassword';
import CreateRecipe from './Pages/Dashboard/CreateRecipe/CreateRecipe';
import ForgotPassword from './Pages/ForgotPassword/ForgotPassword';
import Login from './Pages/Login/Login';
import DetailVideo from './Pages/DetailVideo/DetailVideo';
import ResetPassword from './Pages/ResetPassword/ResetPassword';
import Register from './Pages/Register/Register';
import NotFound from './Pages/PageNotFound/NotFound';
import Profile from './Pages/Dashboard/Profile/Profile';
import Home from './Pages/Home/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard/create-recipe" element={<CreateRecipe />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/code-reset-password" element={<CodeResetPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/recipes/videos/:id" element={<DetailVideo />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
