import "../css/componentes/Logo.css"
import {Link} from "react-router-dom";

const Logo = () => {
    return (
        <Link to="/" style={{textDecoration : "none"}}>  
            <div className="logo"> 
                <img src="/imagenes/logo.png" alt="" />
                <h3 style={{color:"#2A7AE4"}}>Alura</h3>
                <h3 style={{color: "black"}}>Geek </h3>
            </div>
        </Link>
    )
}

export default Logo;