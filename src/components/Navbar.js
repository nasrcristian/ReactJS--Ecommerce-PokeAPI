import { CartWidget, Logo } from "./NavIcons"
import { BotonNavegacion } from "./BotonNavegacion"

const Navbar =()=>{

    return(
        <nav className="navBar">
            <Logo name="Pokemon Store"/>
            <ul className="Botonera d-FlexRow">
                <BotonNavegacion ruta="./index.html" nombreBoton="Tipos"/>
                <BotonNavegacion ruta="./datos.html" nombreBoton="Datos"/>
                <BotonNavegacion ruta="./habitat.html" nombreBoton="Habitat"/>
            </ul>
            <CartWidget />
        </nav>
    )
}

export default Navbar