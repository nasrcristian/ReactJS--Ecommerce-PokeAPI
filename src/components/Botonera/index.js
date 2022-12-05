import { NavLink } from "react-router-dom"
import "./Botonera.css"


const Botonera =()=>(
<ul className="d-FlexRow Botonera">
    <li><NavLink  to="/">Home</NavLink></li>
    <li><NavLink to="/carrito">Carrito</NavLink></li>
</ul>
)

export default Botonera