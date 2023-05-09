import "./Contacto.css"
import Logo from "../Logo/Logo";
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input,Space } from 'antd';

const Contacto = () => {
    return (
        <>
        <div className="contacto">
            <div className="wrap">
                <Logo></Logo>
                <div className="links">
                    <a>Quienes somos</a>
                    <a>Política de privacidade</a>
                    <a>Programa de fidelidad</a>
                    <a>Nuestras tiendas</a>
                    <a>Quiero ser franquiciado</a>
                    <a>Anúncie aquí</a>
                </div>
            </div>
        <div className='div-form'>
        <h4>Hable con nosotros</h4>
        <Form
            name="normal_contacto"
            size='large'
            className="contacto-form"
            initialValues={{ remember: true }}
        >

            <Form.Item
                name="emial"
                rules={[{ required: true, message: 'Please input your Email!' }]}
            >
                <Input className='input' type="email" prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
            </Form.Item>
            <Form.Item
                name="mensaje"
                rules={[{ required: true, message: 'Please input your Menssage!' }]}
            >
                <Input.TextArea
                    className='input'
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="textarea"
                    placeholder="Menssage"
                    maxLength={200}
                />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" className="contacto-form-button">
                Log in
                </Button>
            </Form.Item>
        </Form>
        </div>
        </div>
        </>
        )
}

export default Contacto;