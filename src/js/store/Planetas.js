export const Planetastore={
   planetas:[],
   planetasFavoritos:[] 
}

export function Planetas(getStore,getActions,setStore){
    return{
        CargaPlaneta:async()=>{
            let respuesta=await fetch("https://www.swapi.tech/api/planets");
            if(respuesta.ok)
            respuesta=await respuesta.json();
            const store=getStore();
            setStore({
                ...store,
                Planetas:respuesta
            })
        }
    }
}