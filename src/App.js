// App.js
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate ,Navigator} from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { app } from "./Firebse";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "./Store/authSlice";

import Categories from "./Components/Categories";
import Rooms from "./Components/Rooms";
import ProductDetail from "./Components/ProductDetail";
import Login from "./Login";
import images from "./images.json";


const App = () => {


  const isAuthenticated = localStorage.getItem('user')!=null;
  const dispatch = useDispatch();
  const categories = [...new Set(images.rooms.map((room) => room.category))];

  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Login />} /> */}
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/" element={<Categories />} />
        <Route path="/rooms/:category" element={<Rooms rooms={images.rooms}/>} />
        <Route path="/product/:roomId" element={<ProductDetail rooms={images.rooms}/>} />
        {/* <Route path="/categories" element={isAuthenticated?<Categories />:<Navigate to='/login'/>} />
        <Route path="/rooms/:category" element={isAuthenticated?<Rooms rooms={images.rooms}/>:<Navigate to='/login'/>} />
        <Route path="/product/:roomId" element={isAuthenticated?<ProductDetail rooms={images.rooms}/>:<Navigate to='/login'/>} /> */}
      </Routes>
    </Router>
  );
};

export default App;
