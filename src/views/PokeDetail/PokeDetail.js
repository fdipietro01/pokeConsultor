/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { PokemonContext } from "../../context/pokemons";
import { PokeStats } from "./components/PokeStats"

export const PokeDetail = () => {
  const { id } = useParams();
  const { getPokemonDetail, PokeDetailResponse } = useContext(PokemonContext);

  useEffect(() => {
    getPokemonDetail(id);
  }, []);

  console.log(PokeDetailResponse);

  
  if (PokeDetailResponse === undefined) {
      console.log("t");
      return (<p>Cargando...</p>);
    }

  return (
    <div>
      <h3> Información General </h3>
      <p>Nombre: {PokeDetailResponse?.name}</p>
      <p>Peso: {PokeDetailResponse?.weight}kg</p>
      <p>Altura: {PokeDetailResponse?.height}cm</p>
      <div>
        <h3> Habilidades </h3>
        <PokeStats stats= {PokeDetailResponse?.stats?? []}/>
      </div>
      
    </div>
  );
};
