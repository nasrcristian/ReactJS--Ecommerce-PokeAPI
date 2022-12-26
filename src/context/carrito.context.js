import { createContext, useContext, useState } from "react";
import { PokemonContext } from "./pokemons.context";


export const CarritoContext = createContext([]);

export const CarritoContextProvider =({children})=>{
    const [cart, setCart] = useState([])
    const {pokemons, setPokemons} = useContext(PokemonContext)


    const handleBuy = (item, quantity) => {
        if(cart.find((cartItem)=> cartItem.id === item.id) == null){
            setCart([...cart, {...item, stockQuantity: quantity}])
        } else {
            setCart(cart.map((pokemon)=> {
                if (pokemon.id === item.id ){
                    return {...pokemon, stockQuantity: pokemon.stockQuantity + quantity}
                } else {
                    return pokemon
                }
            }))
        }
        substractFromStock(item, quantity)
    }

    const substractFromStock =(item, boughtQuantity)=>{
        setPokemons(pokemons.map((pokemon)=> {
            return item.id === pokemon.id? {...item, stockQuantity: pokemon.stockQuantity - boughtQuantity}: pokemon
    }))
}

    return(
        <CarritoContext.Provider value={{handleBuy}}>
            {children}
        </CarritoContext.Provider>
    )
}