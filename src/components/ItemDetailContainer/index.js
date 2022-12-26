import { useLocation } from "react-router-dom"
import { useContext } from "react"
import ItemDetail from "../ItemDetail/index"
import { CarritoContext } from "../../context/carrito.context"
const ItemDetailContainer = ()=>{
    const {cart} = useContext(CarritoContext)
    const { state } = useLocation()
    const pokemon = state
    console.log(cart)

    return(
        <main className="mainContainer">
            <ItemDetail pokemon={pokemon} />
        </main>
    )
}

export default ItemDetailContainer