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
import DetailResep from './Pages/DetailResep/DetailResep';
import AuthMiddleware from './Middleware/AuthMiddleware';
import UpdateRecipe from './Pages/Dashboard/UpdateRecipe/UpdateRecipe';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/dashboard/create-recipe"
        element={
          
            <CreateRecipe />
          
        }
      />
      <Route path="/dashboard/my-recipe/:id" element={<UpdateRecipe />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/code-reset-password" element={<CodeResetPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/recipes/videos/:id" element={<DetailVideo />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/recipes/:id" element={<DetailResep />} />
    </Routes>
  );
}

export default App;
