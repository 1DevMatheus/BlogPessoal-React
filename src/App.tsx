import React from 'react';
import Home from "./paginas/home/Home"
import Navbar from "./components/estaticos/navbar/Navbar"
import Footer from "./components/estaticos/footer/Footer"
import './App.css';
import Login from "./paginas/login/Login"

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (

    <Router>
      <Navbar />
      <div style={{ minHeight: '100vh' }}>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />

        </Routes>
      </div>
      <Footer />
    </Router>


  );
}

export default App;
