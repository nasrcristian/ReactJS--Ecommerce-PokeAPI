import StockCount from '../StockCount/index'
import "./ItemList.css"
import { Link } from "react-router-dom"
const ItemList =({pokemon})=>{


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
                            <h5><span className={`${pokemon.types[0].type.name}Background`}>{pokemon.types[0].type.name.toUpperCase()}</span></h5>
                            {pokemon.types[1]? (<h5><span className={`${pokemon.types[1].type.name}Background`}>{pokemon.types[1].type.name.toUpperCase()}</span></h5>): null}
                        </div>
                        <h4>${pokemon.base_experience}</h4>
                        <StockCount itemQuantity={parseInt(Math.random()*6)}/>
                    </section>
        </article>
    )
}

export default ItemList