
const ItemList =({pokemones})=>{


    return(
        <article>
            {pokemones.map((pokemon) =>(
                <>
                    <div key={pokemon.id}>{pokemon.name}</div>
                    {/* <img src={``} alt="pokemon front"/> */}
                    <div>{pokemon.base_experience}</div>
                    <h5><span>${pokemon.types[0].type.name.toUpperCase()}</span></h5>
                    {/* {pokemon.types[1]? <h5><span>${pokemon.types[1].type.name.toUpperCase()}</span></h5>: ""} */}
                    <h4>STOCK: {pokemon.height/3}</h4>
                </>
            ))}
        </article>
    )
}

export default ItemList