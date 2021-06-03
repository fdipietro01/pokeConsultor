import {PokemonListItem} from "./PokemonListItem"

export const PokemonList = ({pokemons}) =>{
    return(
        <>
            {pokemons?.map ((pokemon, index)=> <PokemonListItem key={index} {...pokemon}/>)}
            
        </>
    )
}