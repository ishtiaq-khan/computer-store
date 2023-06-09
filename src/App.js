import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import Home from './pages/Home';
import Laptops from './pages/Laptops';
import Desktops from './pages/Desktops';
import Pcgaming from './pages/Pcgaming';
import Login from './pages/Login';
import { Forgotpassword } from './pages/Forgotpassword';
import  Signup  from './pages/Signup';
import Resetpassword from './pages/Resetpassword';
import Build from './pages/Build';
import Cart from './pages/Cart'; 
import Wishlist from './pages/Wishlist';

function App() {
  return (
  <>
  <BrowserRouter>
   <Routes> 
    <Route path= "/" element={<Layout />}>
      <Route index  element=          {<Home /> }/>
      <Route path="Laptops"  element={< Laptops/>}/>
      <Route path="Desktops" element={< Desktops/>}/>
      <Route path="Pcgaming" element={< Pcgaming/>}/>
      <Route path="Login"    element={< Login/>}/>
      <Route path="forgot-password" element={< Forgotpassword/>}/>
      <Route path="Signup" element={<Signup/>}/>
      <Route path="Resetpassword" element={<Resetpassword/>}/>
      <Route path="Build" element={<Build/>}/>
      <Route path="Cart" element={<Cart/>}/>
      <Route path="Wishlist" element={<Wishlist/>}/>
      </Route>
   </Routes>
    </BrowserRouter>
  </>
  );
}


export default App;
