import Searchbar from "../Searchbar"
import { CartWidget, Logo } from "../NavIcons/index"
import "./NavBar.css"
import { useContext } from "react"
import { CarritoContext } from "../../context/carrito.context"

const Navbar =()=>{



    return(
        <nav className="navBar">
            <Logo name="Pokemon Store"/>
            <Searchbar/>
            <CartWidget />
        </nav>
    )
}

export default Navbar