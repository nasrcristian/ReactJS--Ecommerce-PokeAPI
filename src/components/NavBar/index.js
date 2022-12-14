import Searchbar from "../Searchbar"
import { CartWidget, Logo } from "../NavIcons/index"
import "./NavBar.css"

const Navbar =({pokemons})=>{


    return(
        <nav className="navBar">
            <Logo name="Pokemon Store"/>
            <Searchbar pokemons={pokemons}/>
            <CartWidget />
        </nav>
    )
}

export default Navbar