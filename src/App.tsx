import React from 'react';
import Home from "./paginas/home/Home"
import Navbar from "./components/estaticos/navbar/Navbar"
import Footer from "./components/estaticos/footer/Footer"
import './App.css';
import Login from "./paginas/login/Login"

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import ListaPostagens from './components/postagens/listaPostagens/ListaPostagens';
import ListaTema from './components/temas/listaTemas/ListaTema';

function App() {
  return (

    <Router>
      <Navbar />
      <div style={{ minHeight: '70vh' }}>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Login />} />
          <Route path="/cadastrousuario" element={<CadastroUsuario />} />

          <Route path="/login" element={<Login />} />
          <Route path="/temas" element={<ListaTema />} />
          <Route path="/postagens" element={<ListaPostagens />} />

        </Routes>
      </div>
      <Footer />
    </Router>


  );
}

export default App;
