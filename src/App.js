import "./index.css"
import React from "react";
import Navbar from "./components/Navbar"
import { ItemListContainer } from "./components/ItemListContainer";
import {Routes, BrowserRouter, Route} from 'react-router-dom'
import Carrito from "./components/Carrito"
import ItemDetailContainer from "./components/ItemDetailContainer"


const App = ()=>{
  return(
  <>
    <BrowserRouter>
      <Navbar/>

      <Routes>
        <Route path="/" element={<ItemDetailContainer/>}/>
        <Route path="/pokemones" element={<ItemListContainer greetings="Bienvenido a la PokeStore"/>}/>
        <Route path='/habitat' element={<Carrito/>}/>
        <Route path='/detalle/:detalleId' element={<ItemDetailContainer/>}/>
      </Routes>
    </BrowserRouter>
  </>
);
}

export default App;