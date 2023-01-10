import "./CartContainer.css"
import { useContext, useState } from "react";
import { CarritoContext } from "../../context/carrito.context";

    export default function CartContainer() {
    const { cart, removeFromCart, substractFromCart, totalPrice, cartQuantity, displayCart, setDisplayCart } = useContext(CarritoContext);
    return (
        <div className={`cartContainer ${displayCart}`}>
            <button className="closeButton  btnNot" onClick={()=> setDisplayCart("d-None")}> X </button>
            <h2>Tus productos</h2>
            <div className="cartItemsContainer">
                {cart.map((item) => {
                    return (
                        <div key={item.id} className="cartItemContainer">
                        <img src={item.sprite} alt="pokemon front" />
                        <p>{item.name}</p>
                        <p>x{item.quantity}</p>
                        <p>${item.price}</p>
                        <button onClick={() => substractFromCart(item)}> - </button>
                        <button onClick={() => removeFromCart(item)}> x </button>
                    </div>
                );
            })}
            </div>
            <div className="totalPriceContainer">
                <h3>Cantidad: {cartQuantity}</h3>
                <h3>Precio total: ${totalPrice}</h3>
                <button className="buyButton"> Comprar </button>
            </div>
        </div>
    );
    }
