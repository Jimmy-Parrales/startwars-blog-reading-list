export const Navestore={
    Nave:[],
    NavesFavorita:[]
}

export function NavesEspaciales(getStore,getActions,setStore){
    return{
        navesespaciales:async()=>{
            let respuesta=await fetch("https://www.swapi.tech/api/starships")
            if(respuesta.ok)
            respuesta=await respuesta.json();
            const store=getStore();
            setStore({
                ...store,
                Nave:respuesta
            })
        }
    }
}