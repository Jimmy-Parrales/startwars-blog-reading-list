export const VehiculoStore={
    Vehiculos:[],
    VehiculosFavoritos:[]
}

export function Vehiculo(getStore,getActions,setStore){
    return{
        vehiculo:async()=>{
            let respuesta=await fetch("https://www.swapi.tech/api/vehicles");
            if(respuesta.ok) respuesta=await respuesta.json();
            const store=getStore();
            setStore({
                ...store,
                Vehiculos:respuesta
            })
        }
    }
}