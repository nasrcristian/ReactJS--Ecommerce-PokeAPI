import "./ItemCard.css"

const ItemCard = ({item})=>{
    return(
        <>
            <img alt={`${item.name}`} src={item.sprites.front_default}/>
            <p>{item.name}</p>
            <div className="typesContainer">
                <p className={`${item.types[0].type.name}Background`}>{item.types[0].type.name}</p>
                {item.types[1]? (<p className={`${item.types[1].type.name}Background`}>{item.types[1].type.name}</p>): null}
                {/* Se verifica la existencia del 2do tipo antes de renderizar su tarjeta para que no crashee */}
            </div>
            <p>${item.price}</p>
            <p className="itemCardStock">STOCK: {item.quantity}</p>
        </>)
}

export default ItemCard