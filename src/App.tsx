import React from 'react';
import Home from "./paginas/home/Home"
import Navbar from "./components/estaticos/navbar/Navbar"
import Footer from "./components/estaticos/footer/Footer"
import './App.css';
import Login from "./paginas/login/Login"

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import ListaTema from './components/temas/listaTema/ListaTema';
import CadastroTema from './components/temas/cadastroTema/CadastroTema';
import DeletarTema from './components/temas/deletarTema/DeletartTema';
import DeletarPostagem from './components/postagens/deletarPostagem/DeletarPostagem';
import ListaPostagem from './components/postagens/listaPostagem/ListaPostagem';
import CadastroPost from './components/postagens/cadastroPost/CadastroPost';
import { Provider } from 'react-redux';
import store from './store/Store';
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
<Provider store={store}>
   <ToastContainer />
    <Router>
      <Navbar />
      <div style={{ minHeight: '70vh' }}>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Login />} />
          <Route path="/cadastrousuario" element={<CadastroUsuario />} />

          <Route path="/login" element={<Login />} />

          <Route path="/temas" element={<ListaTema />} />

          <Route path="/posts" element={<ListaPostagem />} />

          <Route path="/formularioPostagem" element={<CadastroPost />} />

          <Route path="/formularioPostagem/:id" element={<CadastroPost />} />

          <Route path="/formularioTema" element={<CadastroTema />} />

          <Route path="/formularioTema/:id" element={<CadastroTema />} />

          <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />

          <Route path="/deletarTema/:id" element={<DeletarTema />} />


        </Routes>
      </div>
      <Footer />
    </Router>
    </Provider>

  );
}

export default App;
