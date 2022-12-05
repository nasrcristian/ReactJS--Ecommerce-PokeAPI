import ItemList from '../ItemList/index'
import ButtonPagination from '../ButtonPagination/index'
import {useEffect, useState} from 'react'
import "./ItemListContainer.css"

export const ItemListContainer =({greetings})=>{
    const [pokemons, setPokemons] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState([1])
    const pokemonsPerPage = 20

    const indexOfLastPokemon = (currentPage * pokemonsPerPage) + 1
    const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage




    const getPokemons = async (start, end)=>{
        try{
            setLoading(true)
            const promises = []
            for(let i = start; i < end; i++){
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

    useEffect(()=>{
        getPokemons(indexOfFirstPokemon, indexOfLastPokemon)
        paginate(currentPage)
    }, [indexOfLastPokemon, indexOfFirstPokemon])

    const paginate =(number)=>{
        setCurrentPage(number)
    }


    return(
    <main className="mainContainer">
        <h1>{greetings}</h1>
        {loading? (<div> Cargando pokemones...</div>):(
        <div className='pokemonContainer d-FlexRow'>
            {(pokemons.map(p =>(<ItemList pokemon={p} key={p.id} />)))}
        </div>)}
        <div>
            <ButtonPagination pokemonsPerPage={pokemonsPerPage} totalPokemons={401} current={currentPage} paginate={paginate}/>
        </div>
    </main>
    )}