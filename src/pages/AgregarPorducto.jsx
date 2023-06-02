import React from 'react';
import "../assets/css/pages/AgregarProducto.css"
import { Button, Form, Input,Select } from 'antd';

const AgregarProducto = ({categorias}) =>{
    return(
        <>
        <div className='div-form-agregar-producto'>
        <Form
            name="normal_login"
            size='large'
            className="form-agregar-producto"
            initialValues={{ remember: true }}
        >
            <h3>Agregar nuevo producto</h3>
            <Form.Item
                name="URL de Imagen"
                rules={[{ required: true, message: 'Please input a URL image!' }]}
            >
                <Input className='input-login' placeholder="URL de Imagen" />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your Password!' }]}
            >
                <Select
                placeholder= "Categoria"
                options={categorias.map((categoria)=> {return {value:categoria.nombre}})}
                />
            </Form.Item>
            <Form.Item
                name="Nombre Producto"
                rules={[{ required: true, message: 'Please input a produc name!' }]}
            >
                <Input className='input-login' placeholder="Nombre del Producto" />
            </Form.Item>
            <Form.Item
                name="precio"
                rules={[{ required: true, message: 'Please input a price!' }]}
            >
                <Input
                    className='input-login'
                    placeholder="Precio del Producto"
                />
            </Form.Item>
            <Form.Item
                name="descrpcion"
                rules={[{ required: true, message: 'Please input your description!' }]}
            >
                <Input.TextArea
                    className='input'
                    type="textarea"
                    placeholder="Descripción del producto"
                    maxLength={30}
                />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                Agregar Producto
                </Button>
            </Form.Item>
        </Form>
        </div>
        </>
    )
}
export default AgregarProducto;