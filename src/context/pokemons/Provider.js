import {PokemonContext} from "./index";
import React, {useState} from "react";
import {apiCall} from "../../api/index";


export const PokemonProvider= ({children})=>{ 

    const [pokeResponse, setPokeResponse] = useState([]);
    
    const callResponse = ()=> {
        
        
        try{
            const a = apiCall({ url:"https://pokeapi.co/api/v2/pokemon/ditto" })
            a.then((res)=> setPokeResponse(res))
         }
        catch(error){
            setPokeResponse ([]);
            console.log(error);
        }
        finally{
            console.log("carga finalizada");
        }
    
}


    return(
        <PokemonContext.Provider value={{ callResponse, pokeResponse }} >
            {children}
        </PokemonContext.Provider>
    )
    
}
