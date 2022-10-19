import React,{useContext} from "react";
import { Context } from "../store/appContext";
import ListaEspecies from "../ComponentesArmados/Especies/Lista-de-Especies";
import "../../styles/home.css";

export const Home = () => {
	const {store, actions}=useContext(Context)

	return(
	<div className="text-center mt-5">
	<h1>App Star Wars</h1>
		<ListaEspecies especies={store.especiesalmacen.especies} />
	</div>
	)
	
	};
