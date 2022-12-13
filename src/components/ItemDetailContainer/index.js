import { useLocation } from "react-router-dom"
import ItemDetail from "../ItemDetail/index"
const ItemDetailContainer = ()=>{
    const { state } = useLocation()
    const pokemon = state
    return(
        <main className="mainContainer">
            <ItemDetail pokemon={pokemon} />
        </main>
    )
}

export default ItemDetailContainer