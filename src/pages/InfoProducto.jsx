import React from 'react';
import "../assets/css/pages/InfoProducto.css"
import Categoria from '../assets/componentes/Categoria';
const InfoProducto = (props) => {

    const {nombre,precio,urlImagen,descripcion} = props.infoProducto
    const {productos} = props

    return (
        <>
        <div className='div-info-producto'>
            <img src={urlImagen} alt="Producto" />
            <div>
                <h2>{nombre}</h2>
                <h4>{precio}</h4>
                <h5>{descripcion}</h5>
            </div>
        </div>
        <Categoria
            datos={{nombre:"Productos Similares"}}
            productos={productos}
        />
        </>
    )
}

export default InfoProducto;