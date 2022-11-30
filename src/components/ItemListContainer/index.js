import ItemList from '../ItemList/index'
import {useEffect, useState, useRef} from 'react'
import "./ItemListContainer.css"

export const ItemListContainer =({greetings})=>{
    const [pokemons, setPokemons] = useState([])
    const [loading, setLoading] = useState(false)


    const firstPokemon = useRef(1)
    const lastPokemon = useRef(20)





    useEffect(()=>{
        const getPokemons = async ()=>{
            try{
                setLoading(true)
                const promises = []
                for(let i = firstPokemon.current; i < lastPokemon.current; i++){
                    promises.push(fetch(`https://pokeapi.co/api/v2/pokemon/${i}`).then(res => res.json()))
                }
                const fetchedPokemons = await Promise.all(promises)
                setPokemons(fetchedPokemons)
            } catch(error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        }
    getPokemons()
    }, [])



    return(
    <main className="mainContainer">
        <h1>{greetings}</h1>
        {loading? (<div> Cargando pokemones...</div>):(
        <div className='pokemonContainer d-FlexRow'>
            {(pokemons.map(p =>(<ItemList pokemon={p} key={p.id} />)))}
        </div>)}
    </main>
    )}