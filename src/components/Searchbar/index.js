import { useCallback } from "react"
import "./Searchbar.css"


const Searchbar =()=>{

    const debounce = (func, wait)=>{
        let timeout
        return function executedFunction(...args){
            const later = ()=>{
                clearTimeout(timeout)
                func(...args)

            }
            clearTimeout(timeout)
            timeout = setTimeout(later, wait)
        }
    }

    const onHandleChange = useCallback(debounce((e, pokemons)=> {
        let searchValue = e.target.value
        console.log("valor de busqueda", searchValue)
        let filteredPokemon = pokemons.filter()
    }, 500), [])
    return(
    <form className="searchbarContainer">
        <input type="text" placeholder="Buscar pokemón..." name="searchbar" className="searchbar" onChange={onHandleChange}/>
    </form>
    )
}

export default Searchbar