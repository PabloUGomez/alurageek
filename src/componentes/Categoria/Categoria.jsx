import React from 'react';
import "./Categoria.css"
import { Card } from 'antd';
import { ArrowRightOutlined,ShoppingCartOutlined } from '@ant-design/icons';

const { Meta } = Card;

const Categoria = (props) => {

    const {productos}= props
    const {id,nombre}= props.datos
    return (
        <>
        <div className='categoria'>
            <span className='titulo-categoria'>
                <h3>{nombre}</h3>
                <span>
                    <a href="">Ver todo </a>
                    <ArrowRightOutlined style={{color: "#2A7AE4", height: "100%"}}/>
                </span>
                
            </span>        
            <div className='lista-productos'>
                {productos.slice(0,6).map ((producto)=><div key={producto.id} className='div-card'><Card
                    hoverable
                    key={producto.id} 
                    className='card'
                    cover={<img alt="example" src={producto.urlImagen}/>}
                    actions={[<a style={{fontSize:"95%"}} >Informacion</a>,<ShoppingCartOutlined style={{fontSize:"100%"}}/>]}
                >
                    <Meta title="Europe Street beat" description="holoa"/>
                </Card></div>)
                }
            </div>
        </div>
        </>
    )
}

export default Categoria;