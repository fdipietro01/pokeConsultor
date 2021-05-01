
export const apiCall = ({
    url,
    method= "get",
    body,
    headers,
})=>{
    
 try{
    const x = fetch(url, {method, body, headers})
    x.then((res)=> {return res.json()})
    }
    catch(error){
        Promise.reject(error)
        console.log("ocurrió un error en la carga");
    }
}