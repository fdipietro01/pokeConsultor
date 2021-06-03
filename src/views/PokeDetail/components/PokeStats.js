import "./PokeStats.css"
export const PokeStats = ({stats})=>{

    return (
        <>
        {stats?.map((x, index)=>(
            <div key = {index} className="pokeStats">
                <p>{x.stat.name}</p>
                <p>{`: ${x.base_stat}%`}</p>
            </div>
        ))}
        </>
    )
}