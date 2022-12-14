import { useNavigate } from "react-router-dom"
import "./SearchedItem.css"

const SearchedItem = ({item})=>{
    const navigate = useNavigate()
    const handleDetail = ()=>{
        navigate(`/pokemon/${item.id}`, {state: item})
    }
    return(
        <li className="d-FlexRow searchedItemCard" onClick={handleDetail}>
            <img alt={`${item.name}`} src={item.sprites.front_default}/>
            <p>{item.name.toUpperCase()}</p>
            <div className="typesContainer">
                <p className={`${item.types[0].type.name}Background`}>{item.types[0].type.name.toUpperCase()}</p>
                {item.types[1]? (<p className={`${item.types[1].type.name}Background`}>{item.types[1].type.name.toUpperCase()}</p>): null}
                {/* Se verifica la existencia del 2do tipo antes de renderizar su tarjeta para que no crashee */}
            </div>
            <p>${item.base_experience}</p>
            <p>STOCK: </p>
        </li>)
}

export default SearchedItem