import "../css/componentes/Buscador.css"
import { AudioOutlined } from '@ant-design/icons';
import { Input } from 'antd';

const Buscador  = () => {
    const { Search } = Input;
    const suffix = (
    <AudioOutlined
        style={{
        fontSize: 16,
        color: '#1677ff',
        }}
    />
    );
    const onSearch = (value) => console.log(value);
    
    return (
            <Search 
                id="search"
                placeholder="¿Qué deseas buscar?"
                onSearch={onSearch}
                style={{
                    width: "40%",
                    borderRadius: "15px",
                }}
            />
    )
}

export default Buscador;
