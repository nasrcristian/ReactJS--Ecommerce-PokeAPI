import "./index.css"
import React, {useState, useEffect} from "react";
import Navbar from "./components/NavBar/index";
import { ItemListContainer } from "./components/ItemListContainer/index";
import {Routes, Route} from 'react-router-dom'
import { PokemonContext } from "./context/pokemons.context";
import { CarritoContextProvider } from "./context/carrito.context";
import ItemDetail from "./components/ItemDetail/index";


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
        const modifiedPokemons = fetchedPokemons.map((pokemon)=> (
          {id: pokemon.id,
          name: pokemon.name,
          sprites: pokemon.sprites,
          types: pokemon.types,
          quantity: Math.floor(Math.sqrt(1/pokemon.base_experience) * 40),
          price: pokemon.base_experience,
          stats:
            [{base_stat: pokemon.stats[0].base_stat, name: "HP"},
            {base_stat: pokemon.stats[1].base_stat, name: "ATK"},
            {base_stat: pokemon.stats[2].base_stat, name: "DEF"},
            {base_stat: pokemon.stats[3].base_stat, name: "SP-A"},
            {base_stat: pokemon.stats[4].base_stat, name: "SP-D"},
            {base_stat: pokemon.stats[5].base_stat, name: "SPEED"}] }))
        setPokemons(modifiedPokemons)
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
                <Route path="/" element={<ItemListContainer greetings="Bienvenido a la tienda"/>}/>
                <Route path="/pokemon/:id" element={<ItemDetail/>}/>
            </Routes>
          </CarritoContextProvider>
      </PokemonContext.Provider>)
  }
  }

export default App;