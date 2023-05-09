import React from 'react';
import {useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import Header from './componentes/Header/Header';
import Footer from './componentes/Footer/Footer';
import Home from './pages/Home/Home.jsx';

function App() {
  return (
    <>
    <Router>
        <Header></Header>  
        <Routes>
          <Route path='/' element={
            <Home/>
          }
          />
        </Routes>
        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;
