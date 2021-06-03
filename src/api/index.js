
export const apiCall = ({
    url,
    method= "get",
    body,
    headers,
})=>{
    
 try{
    return fetch(url, {method, body, headers})
    .then((res)=> {return res.json()})
        }
    catch(error){
        Promise.reject(error)
        console.log("ocurrió un error en la carga");
    }
}