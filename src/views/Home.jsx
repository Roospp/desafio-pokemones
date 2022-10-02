import React from "react";
import Pikachu from "../assets/img/pikachu-caminante.gif"

const Home = () => {
  
  return (
    <div>
      <h1>Bienvenido maestro Pokemón</h1>
      <div className="imagen">
      <img src={Pikachu} alt="pikachu" />
      </div>
    </div>
  );
};

export default Home;
