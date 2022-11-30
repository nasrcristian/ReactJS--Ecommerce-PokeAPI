import "./index.css"
import React from "react";
import Navbar from "./components/NavBar/index";
import { ItemListContainer } from "./components/ItemListContainer/index";
import {Routes, BrowserRouter, Route} from 'react-router-dom'
import Carrito from "./components/Carrito/index"
import ItemDetailContainer from "./components/ItemDetailContainer/index";


const App = ()=>{
  return(
  <>
    <BrowserRouter>
      <Navbar/>

      <Routes>
        <Route path="/" element={<ItemListContainer greetings="Bienvenido a la PokeStore"/>}/>
        <Route path="/detallePokemon" element={<ItemDetailContainer/>}/>
        <Route path='/carrito' element={<Carrito/>}/>
        <Route path='/detalle/:detalleId' element={<ItemDetailContainer/>}/>
      </Routes>
    </BrowserRouter>
  </>
);
}

export default App;