/* eslint-disable react-hooks/exhaustive-deps */
import {useContext, useEffect} from "react";
import {PokemonContext} from "../../context/pokemons/index"
import { PokemonList } from "./components/PokemonsList";

    export const Home = ()=> {
    
        const {getPokemon, pokeResponse} = useContext(PokemonContext);
        useEffect(()=>{
            getPokemon();
        },[])
        console.log (pokeResponse)
        
        if (pokeResponse === []) {
            return (<p>Cargando...</p>);
          }
        return(
        <div> <PokemonList pokemons = {pokeResponse}/></div>)
}