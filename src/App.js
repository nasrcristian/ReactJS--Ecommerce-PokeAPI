import "./index.css"
import React, {useState, useEffect} from "react";
import Navbar from "./components/NavBar/index";
import { ItemListContainer } from "./components/ItemListContainer/index";
import {Routes, BrowserRouter, Route} from 'react-router-dom'
import Carrito from "./components/Carrito/index"
import ItemDetailContainer from "./components/ItemDetailContainer/index";


const App = ()=>{
  const [pokemons, setPokemons] = useState([])
  const [loading, setLoading] = useState(false)

  const getPokemons = async ()=>{
    // Fetch de pokemons que se utilizaran en la aplicación, se muestra una pantalla de carga mientras se consiguen los datos de los pokemon.
    try{
        setLoading(true)
        const promises = []
        for(let i = 1; i <= 494; i++){
            promises.push(fetch(`https://pokeapi.co/api/v2/pokemon/${i}`).then(res => res.json()))
        }
        const fetchedPokemons = await Promise.all(promises)
        setPokemons(fetchedPokemons)
    } catch(error) {
        console.log(error)
        setLoading(false)
    } finally {
      setLoading(false)
    }
  }

    useEffect(()=>{
      getPokemons()
  }, [])

  if (loading){
    return(
      <main>
        <h3 className="loadingMsg">
          Cargando... </h3>
      </main>
      )
  } else {
    return(
      <>
        <BrowserRouter>
          <Navbar pokemons={pokemons}/>
          <Routes>
            <Route path="/" element={<ItemListContainer greetings="Bienvenido a la PokeStore" pokemons={pokemons}/>}/>
            <Route path="/pokemon/:id" element={<ItemDetailContainer/>}/>
            <Route path='/carrito' element={<Carrito/>}/>
          </Routes>
        </BrowserRouter>
      </>)
  }
  }

export default App;