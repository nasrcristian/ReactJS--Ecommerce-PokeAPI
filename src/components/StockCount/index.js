import {useState} from "react"
import "./StockCounter.css"
const StockCount = ({itemQuantity, pokemon})=>{

    const [count, setCount] = useState(0)
    const [stock, setStock] = useState(itemQuantity)

    const handleStockOnAdd =()=>{
        if(stock > 0){
            setCount(count + 1)
            setStock(stock - 1)
        }
    }
    const handleStockOnSubstract =()=>{
        if(count > 0){
            setCount(count - 1)
            setStock(stock + 1)
        }
    }

    return(
        <>
            <h4>STOCK: {stock}</h4>
            <div>
                <button className="stockBtn" onClick={handleStockOnSubstract} > - </button>
                <span>
                    {count}
                </span>
                <button className="stockBtn" onClick={handleStockOnAdd}> + </button>
            </div>
            <div>
                <button className="stockBtn" onClick={()=> {
                count > 0?
                console.log(pokemon.name) : console.log("You must add at least one")
            }}> COMPRAR </button>
            </div>
        </>
    )
}

export default StockCount