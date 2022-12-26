import Searchbar from "../Searchbar"
import { CartWidget, Logo } from "../NavIcons/index"
import "./NavBar.css"
import { useContext } from "react"
import { CarritoContext } from "../../context/carrito.context"

const Navbar =()=>{

    const {cart} = useContext(CarritoContext)

    return(
        <nav className="navBar">
            <Logo name="Pokemon Store"/>
            <Searchbar/>
            <CartWidget />
            <p>{cart.length}</p>
        </nav>
    )
}

export default Navbar