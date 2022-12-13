import StockCount from "../StockCount"
import "./ItemDetail.css"

const ItemDetail =({pokemon})=>{
    return(
        <article className={`${pokemon.types[0].type.name}Background cardDetailContainer`}>
            <h2>{pokemon.name.toUpperCase()}</h2>
            <img src={pokemon.sprites.other["official-artwork"].front_default} alt="pokemon front"/>
            <section className='typesContainer'>
                <h5><p className={`${pokemon.types[0].type.name}Background`}>{pokemon.types[0].type.name.toUpperCase()}</p></h5>
                {pokemon.types[1]? (<h5><p className={`${pokemon.types[1].type.name}Background`}>{pokemon.types[1].type.name.toUpperCase()}</p></h5>): null}
                {/* Se verifica la existencia del 2do tipo antes de renderizar su tarjeta para que no crashee */}
            </section>
            <section className="detailContainer">
                    {pokemon.stats.map((stat) => (
                        <div key={stat.stat.name} className="statContainer">
                            <p>{stat.stat.name.toUpperCase()}</p>
                            <div className="progressBarContainer"><div className="progressBar" style={{width: `${(stat.base_stat/250) * 100}%`}}></div></div>
                            <span>{stat.base_stat}</span>
                        </div>
                    ))}
            </section>
            <section className='priceContainer'>
                    <h4>${pokemon.base_experience}</h4>
                    <StockCount itemQuantity={parseInt(Math.sqrt(1/pokemon.base_experience) * 40)} pokemon={pokemon}/>
            </section>
        </article>
    )
}

export default ItemDetail