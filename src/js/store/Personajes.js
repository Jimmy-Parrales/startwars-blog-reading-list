export const Personajestore={
    personajes:[],
    personajesFavoritos:[]
}

export function Personajes(getStore,getActions,setStore){
    return{
        cargaPersonajes:async()=>{
            let respuesta=await fetch("https://www.swapi.tech/api/people")
            if(resultado.ok)
            resultado=await respuesta.json()
            const store=getStore();
            setStore({
                ...store,
                personajes:respuesta
            })
        }
    }
}