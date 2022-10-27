import "./Index.css"
import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar"
import { ItemListContainer } from "./components/ItemListContainer";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Navbar/>
    <ItemListContainer greetings="Acá se añadirán los pokemones a vender"/>
  </>
);
