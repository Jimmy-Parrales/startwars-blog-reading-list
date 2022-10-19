export const PeliculasStore={
    peliculas:[],//se almacena los datos
    PeliculasFavoritas:[]//almacenamiento de peliculas faavoritas
}

export function Peliculas(getStore,getActions,setStore){
    return{
        CargarPeliculas:async()=>{
           let respuesta=await fetch("https://www.swapi.tech/api/films");
           if(respuesta.ok) respuesta=await respuesta.json();
           const store=getStore();
           setStore({
            ...store,
            peliculas:respuesta
           })
        }
    }
}