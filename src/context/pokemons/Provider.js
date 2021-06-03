import {PokemonContext} from "./index";
import React, {useState} from "react";
import {apiCall} from "../../api/index";


export const PokemonProvider= ({children})=>{ 

    const [pokeResponse, setPokeResponse] = useState([]);
    const [PokeDetailResponse, setPokeDetailResponse] = useState({});
    const [isLoading, setIsLoading] =  useState()
    
    const getPokemon = ()=> {
        
        
        try{
            setPokeResponse()
            apiCall({ url:"https://pokeapi.co/api/v2/pokemon?limit=150" })
            .then((res)=> {setPokeResponse(res.results)})
         }
        catch(error){
            setPokeResponse ([]);
        }
        finally{
            console.log("carga finalizada");
            setIsLoading(false)
        }
    }

    const getPokemonDetail = (id)=>{
        if (!id) Promise.reject("id es requerido")
        
        try{
            setPokeDetailResponse()
            console.log(isLoading)
            apiCall({ url:`https://pokeapi.co/api/v2/pokemon/${id}`})
            .then((res)=> {setPokeDetailResponse(res)})
        }
        
        catch(error){
            setPokeDetailResponse({});
        }
        finally{
            console.log("carga finalizada");
        }
        
    }   


    return(
        <PokemonContext.Provider value={{ getPokemonDetail, getPokemon, pokeResponse, PokeDetailResponse, isLoading}} >
            {children}
        </PokemonContext.Provider>
    )
    
}
