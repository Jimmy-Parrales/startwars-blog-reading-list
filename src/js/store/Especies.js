export const Especiestore={
    especiesalmacen:{
     especies:[] 
    }
}

export function Especies(getStore,getActions,setStore){
    return{
        CargaEspecie:async()=>{
            let respuesta=await fetch("https://www.swapi.tech/api/species")
            if(respuesta.ok) respuesta=await respuesta.json();
            else return
            const store=getStore();
            setStore({
                ...store,
                especiesalmacen:respuesta
            })
        }
    }
}