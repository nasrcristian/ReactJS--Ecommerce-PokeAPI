import "./index.css"
import React, {useState, useEffect} from "react";
import Navbar from "./components/NavBar/index";
import { ItemListContainer } from "./components/ItemListContainer/index";
import {Routes, Route} from 'react-router-dom'
import ItemDetailContainer from "./components/ItemDetailContainer/index";
import { PokemonContext } from "./context/pokemons.context";
import { CarritoContextProvider } from "./context/carrito.context";


const App = ()=>{
  const [pokemons, setPokemons] = useState([])

  const getPokemons = async ()=>{
    // Fetch de pokemons que se utilizaran en la aplicación, se muestra una pantalla de carga mientras se consiguen los datos de los pokemon.
    try{

        const promises = []
        for(let i = 1; i <= 494; i++){
            promises.push(fetch(`https://pokeapi.co/api/v2/pokemon/${i}`).then(res => res.json()))
        }
        const fetchedPokemons = await Promise.all(promises)
        fetchedPokemons.map((pokemon)=> (
          pokemon.stockQuantity = Math.floor(Math.sqrt(1/pokemon.base_experience) * 40)
        ))
        setPokemons(fetchedPokemons)
    } catch(error) {
        console.log(error)
    }
  }

    useEffect(()=>{
      getPokemons()
  }, [])




  if (pokemons.length === 0){
    return(
      <main>
        <h3 className="loadingMsg">
          Cargando... </h3>
      </main>
      )
  } else {
    return(
      <PokemonContext.Provider value={{pokemons, setPokemons}}>
          <CarritoContextProvider>
          <Navbar/>
            <Routes>
                <Route path="/" element={<ItemListContainer greetings="Bienvenido a la PokeStore"/>}/>
                <Route path="/pokemon/:id" element={<ItemDetailContainer/>}/>
            </Routes>
          </CarritoContextProvider>
      </PokemonContext.Provider>)
  }
  }

export default App;