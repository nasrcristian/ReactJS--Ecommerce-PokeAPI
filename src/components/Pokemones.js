import { useEffect } from "react";

export const Pokemones =()=>{
    const [pokemons, setPokemons] = useEffect([])
    useEffect(() =>{
        const getPokemons = async (id)=>{
            try{
                const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
                const dataProducts = await data.json()
                setPokemons(dataProducts)
            } catch(error){
                console.log(error)
            }
        }
        getPokemons(2)
    })
}
