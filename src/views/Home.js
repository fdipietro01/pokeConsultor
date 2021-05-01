import {useContext, useEffect} from "react";
import {PokemonContext} from "../context/pokemons/index"

    export const Home = ()=> {
    
        const {callResponse, pokeResponse} = useContext(PokemonContext);
        useEffect(()=>{
            callResponse();
            console.log(callResponse);
            console.log (pokeResponse)
          
        },[])

        return(
            <div>Home</div>
    );
}