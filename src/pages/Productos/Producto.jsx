import React from 'react';
import "../../componentes/Categoria/Categoria.css"
import "./Productos.css"
import { Card } from 'antd';
import { Link } from 'react-router-dom';

const { Meta } = Card;

const Productos = (props) => {

    const {productos} = props

    return (
        <>
        <div className='productos'>
            <span className='titulo-categoria'>
                <h3>Todos los productos</h3>
                <Link to="/AgregarProducto"><button className='button-agregar-producto'>Agregar producto</button></Link>
            </span>
            <div className='lista-todos-productos'>
                {productos.map ((producto)=><div key={producto.id} className='div-card'><Card
                    hoverable
                    key={producto.id} 
                    className='card'
                    cover={<img alt="example" src={producto.urlImagen}/>}
                >
                    <Meta title={producto.nombre} description={`$ ${producto.precio}`}/>
                </Card></div>)
                }
            </div>
        </div>
        </>
    )
}

export default Productos
