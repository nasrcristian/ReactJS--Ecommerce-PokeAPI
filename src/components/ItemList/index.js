import StockCount from '../StockCount/index'
import "./ItemList.css"
import { Link } from "react-router-dom"
const ItemList =({pokemon})=>{
    // Renderiza una carta con los datos de un pokemon que es enviado por parametro.

    return(
        <article className={`${pokemon.types[0].type.name}Background cardContainer`}>
                    <section>
                        <Link to="/detalle:detalleId">
                            <h2>{pokemon.name.toUpperCase()}</h2>
                            <img src={pokemon.sprites.front_default} alt="pokemon front"/>
                            <button className='stockBtn'>VER DETALLES</button>
                        </Link>
                    </section>
                    <section className='detailsContainer'>
                        <div className='d-FlexRow typesContainer'>
                            <h5><p className={`${pokemon.types[0].type.name}Background`}>{pokemon.types[0].type.name.toUpperCase()}</p></h5>
                            {pokemon.types[1]? (<h5><p className={`${pokemon.types[1].type.name}Background`}>{pokemon.types[1].type.name.toUpperCase()}</p></h5>): null}
                            {/* Se verifica la existencia del 2do tipo antes de renderizar su tarjeta para que no crashee */}
                        </div>
                        <h4>${pokemon.base_experience}</h4>
                        <StockCount itemQuantity={parseInt(Math.sqrt(1/pokemon.base_experience) * 40)}/>
                    </section>
        </article>
    )
}

export default ItemList