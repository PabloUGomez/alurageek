import React from 'react';
import "./Home.css"
import Categoria from '../../componentes/Categoria/Categoria';

const Home = (props) => {

    const {categorias,productos} = props

    return (
        <>
            <div className='banner'>
                <span>
                    <h2>Febrero Promocional</h2>
                    <h3>Productos selecionados con 33% de descuento</h3>
                    <button>Ver consolas</button> 
                </span>
            </div>
            {categorias.map((categoria)=> <Categoria
                datos={categoria}
                key={categoria.id} 
                productos={productos.filter(producto => producto.categoria === categoria.nombre)}
            />)
            }
        </>
    )
}

export default Home; 