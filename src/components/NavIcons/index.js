import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { CarritoContext } from "../../context/carrito.context"
import "./NavIcons.css"

export const CartButton =()=>{

    const {setDisplayCart, displayCart} = useContext(CarritoContext)

    return(
    <div className="carritoContainer" onClick={()=> displayCart === "d-None"? setDisplayCart(""): setDisplayCart("d-None") }>
        <img alt="Carrito de compras" src="./images/cart.png" className="carrito"/>
    </div>
    )
}

export const Logo =({name})=>(
    <NavLink to="/"className="logoContainer d-FlexRow">
        <img alt="" src="https://imgs.search.brave.com/OXqapG0PSTVCvj8PVVqq4Po8WICnZ1uKT62gox8_ktE/rs:fit:1024:1024:1/g:ce/aHR0cHM6Ly9hcnQu/bmdmaWxlcy5jb20v/aW1hZ2VzLzM4NjAw/MC8zODY1Nzdfc3Rh/cmRvZ2VfOC1iaXQt/cG9rZWJhbGwucG5n/P2YxNDQ2NzM3MzU4" className="logo"/>
        <h2> {name}</h2>
    </NavLink>
)


