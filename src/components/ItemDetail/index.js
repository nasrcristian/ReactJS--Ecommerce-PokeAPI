

const ItemDetail =({pokemon})=>{
    console.log(pokemon)
    return(
        <article className={`${pokemon.types[0].type.name}Background cardContainer`}>
            <section>
                <h2>{pokemon.name.toUpperCase()}</h2>
                <img src={pokemon.sprites.front_default} alt="pokemon front"/>
            </section>
            <section className='detailsContainer'>
                <div className='d-FlexRow typesContainer'>
                    <h5><p className={`${pokemon.types[0].type.name}Background`}>{pokemon.types[0].type.name.toUpperCase()}</p></h5>
                    {pokemon.types[1]? (<h5><p className={`${pokemon.types[1].type.name}Background`}>{pokemon.types[1].type.name.toUpperCase()}</p></h5>): null}
                </div>
                <h4>${pokemon.base_experience}</h4>
            </section>
        </article>
    )
}

export {ItemDetail}