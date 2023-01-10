import { createContext, useContext, useMemo, useState } from "react";
import { PokemonContext } from "./pokemons.context";


export const CarritoContext = createContext([]);

export const CarritoContextProvider =({children})=>{
    const [cart, setCart] = useState([])
    const [displayCart, setDisplayCart] = useState("d-None")
    const {pokemons, setPokemons} = useContext(PokemonContext)


    const addToCart = (item, quantity) => {
        if(cart.find((cartItem)=> cartItem.id === item.id) == null){
            setCart([...cart, {id: item.id, name: item.name, sprite: item.sprites.front_default, price: item.price, quantity: quantity}])
        } else {
            setCart(cart.map((pokemon)=> {
                if (pokemon.id === item.id ){
                    return {...pokemon, quantity: pokemon.quantity + quantity}
                } else {
                    return pokemon
                }
            }))
        }
        substractFromStock(item, quantity)
    }

    const substractFromStock =(item, boughtQuantity)=>{
        setPokemons(pokemons.map((pokemon)=> {
            return (
                item.id === pokemon.id? {...item, quantity: pokemon.quantity - boughtQuantity}: pokemon
            )
    }))
}

    const addToStock =(item, quantity)=>{
        setPokemons(pokemons.map((pokemon)=> (item.id === pokemon.id? {...pokemon, quantity: pokemon.quantity + quantity}: pokemon)))
    }

    const removeFromCart = (item) => {
        addToStock(item, item.quantity)
        setCart(cart.filter((pokemon) => pokemon.id !== item.id))
}

    const substractFromCart = (item) => {
        if(item.quantity > 1){
            addToStock(item, 1)
            setCart(cart.map((pokemon)=> {
                if (pokemon.id === item.id ){
                    return {...pokemon, quantity: pokemon.quantity - 1}
                } else {
                    return pokemon
                }
            }))
        } else{
            removeFromCart(item)
        }
    }

    const totalPrice = useMemo(()=> (cart.reduce((acc, item) => (item.price * item.quantity) + acc, 0)), [cart])
    const cartQuantity = useMemo(()=> (cart.reduce((acc, item) => item.quantity + acc, 0)), [cart])


    return(
        <CarritoContext.Provider value={{addToCart, cart, removeFromCart, substractFromCart, totalPrice, cartQuantity, displayCart, setDisplayCart}}>
            {children}
        </CarritoContext.Provider>
    )
}