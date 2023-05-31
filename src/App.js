import React from 'react';
import {useState} from 'react';
import { v4 as uuid } from 'uuid';
import {BrowserRouter as Router, Routes, Route, useParams} from 'react-router-dom'
import './App.css';
import Header from './componentes/Header/Header';
import Footer from './componentes/Footer/Footer';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login.jsx';
import Productos from "./pages/Productos/Producto"

function App() {

  const [categorias,actualizarCategorias] = useState([{
    id: uuid(),
    nombre: "Star Wars",
  },
  {
    id: uuid(),
    nombre: "Consolas",
  },
  {
    id: uuid(),
    nombre: "Diversos",
  }]);

  const [productos,actualizarProductos] = useState([{
    id: uuid(),
    nombre: "Producto XYZ",
    categoria: "Star Wars",
    precio: "60,00",
    urlImagen: "imagenes/producto1.png",
    descrpcion: ""
  },
  {
    id: uuid(),
    nombre: "Producto XYZ",
    categoria: "Star Wars",
    precio: "60,00",
    urlImagen: "imagenes/producto2.png",
    descrpcion: ""
  },
  {
    id: uuid(),
    nombre: "Producto XYZ",
    categoria: "Star Wars",
    precio: "60,00",
    urlImagen: "imagenes/producto3.png",
    descrpcion: ""
  },
  {
    id: uuid(),
    nombre: "Producto XYZ",
    categoria: "Star Wars",
    precio: "60,00",
    urlImagen: "imagenes/producto4.png",
    descrpcion: ""
  },
  {
    id: uuid(),
    nombre: "Producto XYZ",
    categoria: "Star Wars",
    precio: "60,00",
    urlImagen: "imagenes/producto5.png",
    descrpcion: ""
  },
  {
    id: uuid(),
    nombre: "Producto XYZ",
    categoria: "Star Wars",
    precio: "60,00",
    urlImagen: "imagenes/producto6.png",
    descrpcion: ""
  },
  {
    id: uuid(),
    nombre: "Control XYZ",
    categoria: "Consolas",
    precio: "60,00",
    urlImagen: "imagenes/producto7.png",
    descrpcion: ""
  },
  {
    id: uuid(),
    nombre: "Control XYZ",
    categoria: "Consolas",
    precio: "60,00",
    urlImagen: "imagenes/producto8.png",
    descrpcion: ""
  },
  {
    id: uuid(),
    nombre: "Control XYZ",
    categoria: "Consolas",
    precio: "60,00",
    urlImagen: "imagenes/producto9.png",
    descrpcion: ""
  },
  {
    id: uuid(),
    nombre: "Control XYZ",
    categoria: "Consolas",
    precio: "60,00",
    urlImagen: "imagenes/producto10.png",
    descrpcion: ""
  },
  {
    id: uuid(),
    nombre: "Control XYZ",
    categoria: "Consolas",
    precio: "60,00",
    urlImagen: "imagenes/producto11.png",
    descrpcion: ""
  },
  {
    id: uuid(),
    nombre: "Control XYZ",
    categoria: "Consolas",
    precio: "60,00",
    urlImagen: "imagenes/producto12.png",
    descrpcion: ""
  },
  {
    id: uuid(),
    nombre: "Remera",
    categoria: "Diversos",
    precio: "60,00",
    urlImagen: "imagenes/producto13.png",
    descrpcion: ""
  },
  {
    id: uuid(),
    nombre: "Remera",
    categoria: "Diversos",
    precio: "60,00",
    urlImagen: "imagenes/producto14.png",
    descrpcion: ""
  },
  {
    id: uuid(),
    nombre: "Remera",
    categoria: "Diversos",
    precio: "60,00",
    urlImagen: "imagenes/producto15.png",
    descrpcion: ""
  },
  {
    id: uuid(),
    nombre: "Remera",
    categoria: "Diversos",
    precio: "60,00",
    urlImagen: "imagenes/producto16.png",
    descrpcion: ""
  },
  {
    id: uuid(),
    nombre: "Remera",
    categoria: "Diversos",
    precio: "60,00",
    urlImagen: "imagenes/producto17.png",
    descrpcion: ""
  },
  {
    id: uuid(),
    nombre: "Remera",
    categoria: "Diversos",
    precio: "60,00",
    urlImagen: "imagenes/producto18.png",
    descrpcion: ""
  }
  
]);

  return (
    <>
    <Router>
        <Header></Header>  
        <Routes>
          <Route path='/' element={
              <Home
              categorias={categorias}
              productos={productos}
              />
          }
          />
          <Route path='/Productos' element={
            <Productos
            productos={productos}
            />
          }
          />
          <Route path='/Login' element={
            <Login/>
          }
          />
        </Routes>
        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;
