import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { CarritoContext } from "../../context/carrito.context";
import "./ItemDetail.css"
import StockCount from "../StockCount";
const ItemDetail = () => {
    const { state } = useLocation();
    const pokemon = state;
    console.log(pokemon)
    return (
        <main className="mainContainer">
            <article className={`${pokemon.types[0].type.name}Background cardDetailContainer`}>
                <h2>{pokemon.name.toUpperCase()}</h2>
                <img src={pokemon.sprites.other["official-artwork"].front_default} alt="pokemon front"/>
                <section className="typesContainer">
                    <h5>
                        <p className={`${pokemon.types[0].type.name}Background`}>
                        {pokemon.types[0].type.name.toUpperCase()}
                        </p>
                    </h5>
                    {pokemon.types[1] ? (
                        <h5>
                        <p className={`${pokemon.types[1].type.name}Background`}>
                            {pokemon.types[1].type.name.toUpperCase()}
                        </p>
                        </h5>
                    ) : null}
                    {/* Se verifica la existencia del 2do tipo antes de renderizar su tarjeta para que no crashee */}
                </section>
                <section className="detailContainer">
                    {pokemon.stats.map((stat) => (
                        <div key={stat.name} className="statContainer">
                        <p>{stat.name.toUpperCase()}</p>
                        <div className="progressBarContainer">
                            <div
                            className="progressBar"
                            style={{ width: `${(stat.base_stat / 2.5)}%` }}
                            ></div>
                        </div>
                        <span>{stat.base_stat}</span>
                        </div>
                    ))}
                </section>
                <section className="priceContainer">
                    <h4>${pokemon.base_experience}</h4>
                    <StockCount pokemon={pokemon} />
                </section>
            </article>
        </main>
    );
    };

export default ItemDetail;
