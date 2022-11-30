import Botonera from "../Botonera"
import { CartWidget, Logo } from "../NavIcons/index"
import "./NavBar.css"

const Navbar =()=>{

    return(
        <nav className="navBar">
            <Logo name="Pokemon Store"/>
            <Botonera/>
            <CartWidget />
        </nav>
    )
}

export default Navbar