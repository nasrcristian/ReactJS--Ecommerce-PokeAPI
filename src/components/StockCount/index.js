import {useState} from "react"
import "./StockCounter.css"
const StockCount = ({itemQuantity})=>{

    const [count, setCount] = useState(0)
    const [stock, setStock] = useState(itemQuantity)

    const updateStockOnAdd =()=>{
        if(stock > 0){
            setCount(count + 1)
            setStock(stock - 1)
        }
    }
    const updateStockOnSubstract =()=>{
        if(count > 0){
            setCount(count - 1)
            setStock(stock + 1)
        }
    }

    return(
        <>
            <h4>STOCK: {stock}</h4>
            <div>
                <button className="stockBtn" onClick={updateStockOnSubstract} > - </button>
                <span>
                    {count}
                </span>
                <button className="stockBtn" onClick={updateStockOnAdd}> + </button>
            </div>
            <div>
                <button className="stockBtn"> COMPRAR </button>
            </div>
        </>
    )
}

export default StockCount