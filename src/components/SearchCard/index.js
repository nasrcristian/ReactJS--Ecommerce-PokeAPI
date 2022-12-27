import "./SearchCard.css"

const SearchCard = ({item})=>{
    return(
        <>
            <img alt={`${item.name}`} src={item.sprites.front_default}/>
            <p>{item.name.toUpperCase()}</p>
            <div className="typesContainer">
                <p className={`${item.types[0].type.name}Background`}>{item.types[0].type.name.toUpperCase()}</p>
                {item.types[1]? (<p className={`${item.types[1].type.name}Background`}>{item.types[1].type.name.toUpperCase()}</p>): null}
                {/* Se verifica la existencia del 2do tipo antes de renderizar su tarjeta para que no crashee */}
            </div>
            <p>${item.base_experience}</p>
            <p>STOCK: {item.stockQuantity}</p>
        </>)
}

export default SearchCard