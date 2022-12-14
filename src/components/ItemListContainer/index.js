import ItemList from '../ItemList/index'
import ButtonPagination from '../ButtonPagination/index'
import {useContext, useEffect, useState} from 'react'
import "./ItemListContainer.css"
import { PokemonContext } from '../../context/pokemons.context'

export const ItemListContainer =({greetings})=>{
    const {pokemons} = useContext(PokemonContext)
    const [currentPage, setCurrentPage] = useState([1])
    const [displayedPokemons, setDisplayedPokemons] = useState(pokemons)
    const pokemonsPerPage = 17

    const indexOfLastPokemon = (currentPage * pokemonsPerPage)
    const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage

    useEffect(()=>{
        setDisplayedPokemons(pokemons.slice(indexOfFirstPokemon, indexOfLastPokemon))
        paginate(storagedSessionPage || 1)
    }, [pokemons, indexOfFirstPokemon, indexOfLastPokemon])

    const paginate =(number)=>{
        // Setea la pagina del usuario y la guarda en localstorage para poder dirigirse a ella cuando vuelva a entrar.
        setCurrentPage(number)
        localStorage.setItem("Current Page", `${number}`)
    }
    const storagedSessionPage = JSON.parse(localStorage.getItem("Current Page"))


    return(
        <main className="mainContainer">
            <h1>{greetings}</h1>
            <div className='pokemonContainer d-FlexRow'>
                {(displayedPokemons.map(p =>(<ItemList pokemon={p} key={p.id}/>)))}
            </div>
            <div>
                <ButtonPagination pokemonsPerPage={pokemonsPerPage} totalPokemons={494} current={currentPage} paginate={paginate}/>
            </div>
            <div></div>
        </main>)
}


