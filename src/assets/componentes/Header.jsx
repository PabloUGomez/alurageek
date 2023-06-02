import "../css/componentes/Header.css"
import Logo from "./Logo";
import Buscador from "./Buscador"
import {Link, useLocation} from "react-router-dom";
import { Button } from "antd";

const Header = () => {
    const url = useLocation();
    return (
        <>
        <div className="header">
            <div>
                <Logo></Logo>
                <Buscador></Buscador>
            </div>  
            {url.pathname === "/"  &&<Link to="/Login"><Button className="button-header">Login</Button></Link>}
            {url.pathname === "/AgregarProducto" &&<Link to="/MenuAdministrador"><Button className="button-header">Menu Administrador</Button></Link>}
        </div>
        </> 
    )
}

export default Header;