import {useState, useContext} from "react"
import "./StockCounter.css"
import { CarritoContext } from "../../context/carrito.context"
const StockCount = ({pokemon})=>{

const [itemQuantity, setItemQuantity] = useState(0)
const {addToCart} = useContext(CarritoContext)

const handleSubstract = ()=> itemQuantity > 0? setItemQuantity(itemQuantity - 1): null
const handleAdd = ()=> itemQuantity < pokemon.quantity? setItemQuantity(itemQuantity + 1): null
const handleBuy = ()=>{
    addToCart(pokemon, itemQuantity)
    setItemQuantity(0)
}



    return(
        <>
            <h4>STOCK: {pokemon.quantity}</h4>
            <div>
                <button className="stockBtn" onClick={handleSubstract} > - </button>
                <span>
                    {itemQuantity}
                </span>
                <button className="stockBtn" onClick={handleAdd}> + </button>
            </div>
            <div>
                <button className="stockBtn" onClick={itemQuantity > 0 && pokemon.quantity - itemQuantity >= 0? handleBuy: null}> COMPRAR </button>
            </div>
        </>
    )
}

export default StockCount