import {useState, useContext, useCallback} from "react"
import "./StockCounter.css"
import { CarritoContext } from "../../context/carrito.context"
import { PokemonContext } from "../../context/pokemons.context"
const StockCount = ({pokemon})=>{

    const {pokemons, setPokemons} = useContext(PokemonContext)
    const {handleBuy} = useContext(CarritoContext)



    return(
        <>
            <h4>STOCK: {pokemon.stockQuantity}</h4>
            <div>
                <button className="stockBtn"
                onClick={null} > - </button>
                <span>
                    {0}
                </span>
                <button className="stockBtn" onClick={null}> + </button>
            </div>
            <div>
                <button className="stockBtn" onClick={()=> handleBuy(pokemon, 3)}> COMPRAR </button>
            </div>
        </>
    )
}

export default StockCount