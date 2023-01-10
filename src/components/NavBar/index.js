import Searchbar from "../Searchbar"
import { CartButton, Logo } from "../NavIcons/index"
import "./NavBar.css"
import CartContainer from "../CartContainer"


const Navbar =()=>{



    return(
        <div className="navBarContainer">
            <nav className="navBar">
                <Logo name="Pokemon Store"/>
                <Searchbar/>
                <CartButton />
            </nav>
            <CartContainer/>
        </div>
    )
}

export default Navbar