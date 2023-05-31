import "./Header.css"
import Logo from "../Logo/Logo";
import Buscador from "../Buscador/Buscador"
import {Link, useLocation, useParams} from "react-router-dom";

const Header = () => {
    const url = useLocation();
    console.log(url.pathname);
    return (
        <>
        <div className="header">
            <div>
                <Logo></Logo>
                <Buscador></Buscador>
            </div>  
            {url.pathname === "/"  &&<Link to="/Login"><button className="button-header">Login</button></Link>}
            {url.pathname === "/AgregarProducto" &&<Link to="/MenuAdministrador"><button className="button-header">Menu Administrador</button></Link>}
        </div>
        </> 
    )
}

export default Header;