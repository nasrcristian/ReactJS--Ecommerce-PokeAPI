import ItemList from '../ItemList/index'
import ButtonPagination from '../ButtonPagination/index'
import {useEffect, useState} from 'react'
import "./ItemListContainer.css"

export const ItemListContainer =({greetings, pokemons})=>{
    const [currentPage, setCurrentPage] = useState([1])
    const [displayedPokemons, setDisplayedPokemons] = useState([pokemons])
    const pokemonsPerPage = 20

    const indexOfLastPokemon = (currentPage * pokemonsPerPage) + 1
    const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage



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
            {(pokemons.map(p =>(<ItemList pokemon={p} key={p.id}/>)))}
        </div>
        <div>
            <ButtonPagination pokemonsPerPage={pokemonsPerPage} totalPokemons={401} current={currentPage} paginate={paginate}/>
        </div>
        <div onLoad></div>
    </main>
    )}