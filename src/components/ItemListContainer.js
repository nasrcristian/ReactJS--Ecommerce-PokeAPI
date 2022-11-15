import ItemList from './ItemList'
import {useEffect, useState, useRef} from 'react'

export const ItemListContainer =({greetings})=>{
    const [pokemons, setPokemons] = useState([])
    const [loading, setLoading] = useState(false)


    const firstPokemon = useRef(1)
    const lastPokemon = useRef(20)



    const getPokemons = async (start = 1, end = 20)=>{
        try{
            setLoading(true)
            const promises = []
            for(let i = start; i < end; i++){
                getPokemons.push(fetch(`https://pokeapi.co/api/v2/pokemon/${i}`).then(res => res.json()))
            }
            const fetchedPokemons = await Promise.all(promises)
            const dataPokemons = fetchedPokemons.map((pokemon)=>{
                return{
                    id: pokemon.id,
                    name: pokemon.name,
                    type: pokemon.types.map(type => type.type.name).join( "," ),
                    experience: pokemon.base_experience,
                    image: pokemon.sprites.front_default,
                    weight: pokemon.weight,
                    height: pokemon.height,
                    gen: pokemon.generation.name,
                    stats: pokemon.stats.map(stats => stats.stats.name).join( " : " ).join(pokemon.stats.map(stats => stats.stats.base_stat))
                }
            })
            setPokemons(dataPokemons)
        } catch(error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(()=>{
        getPokemons(firstPokemon.current, lastPokemon.current)

    }, [])


    return(
    <main className="mainContainer">
        <h1>{greetings}</h1>
        {loading? (<div> Cargando pokemones...</div>): null}
    </main>
    )}