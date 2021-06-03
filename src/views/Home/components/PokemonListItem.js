import {Link} from "react-router-dom";

export const PokemonListItem = ({name, url})=> {

    const getId = ()=> url.split("/")[6];
    return(
    <>
        <p>{name}</p>
        <button><Link to={`/pokemon/${getId()}`}>Ver detalle</Link></button>
    </>
    )

 }