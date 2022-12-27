import { useState, useMemo, useContext} from "react"
import { useNavigate } from "react-router-dom"
import { PokemonContext } from "../../context/pokemons.context"
import SearchCard from "../SearchCard/index"
import "./Searchbar.css"


const Searchbar =()=>{

    const {pokemons} = useContext(PokemonContext)
    const [query, setQuery] = useState("")
    const [displayList, setDisplayList] = useState("")
    const navigate = useNavigate()

    const is_IncludedIn_name = (value, pokemon)=> {
        // Indica si *value* se encuentra en el nombre del pokemon
        return(pokemon.name.includes(value))
    }
    const is_IncludedIn_type = (value, pokemon)=> {
        // Indica si *value* se encuentra en el nombre de los tipos del pokemon
        return(pokemon.types[0].type.name.includes(value) || (pokemon.types[1] && pokemon.types[1].type.name.includes(value)))
    }

    const filteredPokemons = useMemo(()=> {
        return pokemons.filter(pokemon => (is_IncludedIn_name(query.toLowerCase(), pokemon) || is_IncludedIn_type(query.toLowerCase(), pokemon)))
    }, [pokemons, query])


    return(
        <form className="searchbarContainer" onFocus={()=>{setDisplayList("d-Block")}}
        onBlur={(e)=>{
                // Al hacer focus en un input aparecen las sugerencias de pokemones, si se aprieta en uno se navega a el, si se quita el focus desaparece
                if(e.relatedTarget){
                    navigate(`/pokemon/${e.relatedTarget.value}`, {state: pokemons[e.relatedTarget.value-1]})
                }
            setDisplayList("")}}>

        <input type="search" placeholder="Buscar pokemón..." name="searchbar" className="searchbar" value={query} onChange={(e) => {setQuery(e.target.value)}} autoComplete="off"/>
            {(!filteredPokemons)? null:
                <ul className={`searchListContainer ${displayList}`}>
                {filteredPokemons.map((pokemon)=> (
                    <button key={pokemon.id} value={pokemon.id} className={`btnDont searchedItemCard`}>
                        <SearchCard key={pokemon.id} item={pokemon}/>
                    </button>))}
                </ul>}
    </form>
    )
}

export default Searchbar