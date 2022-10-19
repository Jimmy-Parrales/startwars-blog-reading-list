import { PeliculasStore, Peliculas } from "./Peliculas";
import { Personajestore, Personajes } from "./Personajes";
import { Planetastore, Planetas } from "./Planetas";
import { Especiestore, Especies } from "./Especies";
import { Navestore, NavesEspaciales } from "./Naves";
import { VehiculoStore, Vehiculo } from "./Vehiculos";
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			...PeliculasStore,//el dato no cae encima de otro
			...Personajestore,
			...Planetastore,
			...Especiestore,
			...Navestore,
			...VehiculoStore
		},
		actions: {
			...Peliculas(getStore,getActions,setStore),
			...Personajes(getStore,getActions,setStore),
			...Planetas(getStore,getActions,setStore),
			...Especies(getStore,getActions,setStore),
			...NavesEspaciales(getStore,getActions,setStore),
			...Vehiculo(getStore,getActions,setStore)
		}
	};
};

export default getState;
