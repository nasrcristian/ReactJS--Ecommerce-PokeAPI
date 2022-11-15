import {useState} from "react"

const ItemCount = ({stock})=>{

    const [count, setCount] = useState(stock)

    return(
        <>
        <button className="counterBtn" onClick={() => count>0 ? setCount(count - 1): null} > - </button>
            <span>
                {count}
            </span>
        <button className="counterBtn" onClick={() => setCount(count + 1)}> + </button>
        </>
    )
}

export default ItemCount