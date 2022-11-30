import { NavLink } from "react-router-dom"
import "./Botonera.css"


const Botonera =()=>(
<ul className="d-FlexRow Botonera">
    <li><NavLink  to="/">Home</NavLink></li>
    <li><NavLink to="/detallePokemon">Tipos</NavLink></li>
    <li><NavLink to="/carrito">Habitat</NavLink></li>
</ul>
)

export default Botonera