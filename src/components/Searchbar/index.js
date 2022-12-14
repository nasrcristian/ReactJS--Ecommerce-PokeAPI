import { useCallback, useState } from "react"
import SearchedItem from "../SearchedItem/index"
import "./Searchbar.css"


const Searchbar =({pokemons})=>{

    const [filteredPokemons, setFilteredPokemons] = useState([])
    const [displayList, setDisplayList] = useState(false)
    const is_IncludedIn_name = (value, pokemon)=> {
        // Indica si *value* se encuentra en el nombre del pokemon
        return(pokemon.name.includes(value))
    }
    const is_IncludedIn_type = (value, pokemon)=> {
        // Indica si *value* se encuentra en el nombre de los tipos del pokemon
        return(pokemon.types[0].type.name.includes(value) || (pokemon.types[1] && pokemon.types[1].type.name.includes(value)))
    }

    const onHandleChange = (useCallback((e)=> {
        let searchValue = e.target.value.toLowerCase()
        setFilteredPokemons(pokemons.filter(pokemon => (is_IncludedIn_name(searchValue, pokemon) || is_IncludedIn_type(searchValue, pokemon))))
    }, [filteredPokemons, pokemons]))


    return(
    <div className="searchbarContainer">
        <input type="text" placeholder="Buscar pokemón..." name="searchbar" className="searchbar" onChange={onHandleChange} onFocus={()=> {setDisplayList("d-Block")}} onBlur={()=> {setDisplayList("")}} />
        {(!filteredPokemons || filteredPokemons.length === pokemons.length)? null: (
        <ul className={`searchListContainer ${displayList}`}>
            {filteredPokemons.map((pokemon)=> (
                <SearchedItem key={pokemon.id} item={pokemon}/>)
            )}
        </ul>)}
    </div>
    )
}

export default Searchbar