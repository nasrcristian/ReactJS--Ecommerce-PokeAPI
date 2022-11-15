import { NavLink } from "react-router-dom"
import { CartWidget, Logo } from "./NavIcons"

const Navbar =()=>{

    return(
        <nav className="navBar">
            <Logo name="Pokemon Store"/>
            <ul className="Botonera d-FlexRow">
                <li><NavLink className="Botonera" to="/">Home</NavLink></li>
                <li><NavLink className="Botonera" to="/pokemones">Tipos</NavLink></li>
                <li><NavLink className="Botonera" to="/habitat">Habitat</NavLink></li>
            </ul>
            <CartWidget />
        </nav>
    )
}

export default Navbar