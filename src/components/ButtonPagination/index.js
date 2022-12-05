import "./ButtonPagination.css"

const ButtonPagination = ({current, pokemonsPerPage, totalPokemons, paginate })=>{
    const pageNumbers = []
    for(let i = current-3 > 0? current - 3: 1; i < ((current + 3) >= (totalPokemons / pokemonsPerPage)?  totalPokemons / pokemonsPerPage: current + 3); i++){
        pageNumbers.push(i)
    }
    return(


        <div>
            {!pageNumbers.includes(1)? (<button onClick={()=> paginate(1)} className="paginationBtn"> 1 </button>): null} {/* Boton que siempre dirige a la primer pagina  */}
            {pageNumbers.map(number => ( number !== current ?
                <button onClick={()=> paginate(number)} key={number} className="paginationBtn">{number}</button> : <button className="paginationBtn currentBtn" disabled>{current}</button>))} {/* Uso de ternario para saber siempre en que pagina se encuentra */}
            {!pageNumbers.includes(parseInt(totalPokemons / pokemonsPerPage))? <button onClick={()=> paginate(parseInt(totalPokemons / pokemonsPerPage))} className="paginationBtn"> {parseInt(totalPokemons / pokemonsPerPage)} </button>: null } {/* Boton que siempre dirige a la ultima pagina  */}
        </div>
    )
}

export default ButtonPagination