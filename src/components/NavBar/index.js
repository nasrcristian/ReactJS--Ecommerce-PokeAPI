import Searchbar from "../Searchbar"
import { CartWidget, Logo } from "../NavIcons/index"
import "./NavBar.css"

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