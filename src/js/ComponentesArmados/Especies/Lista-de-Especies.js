import React from "react";
import { Link } from "react-router-dom";


export default function ListaEspecies(props){
    return(
        <ul>
            {props.especies.map((especie,index)=>{
                return(
                    <li key={index}>
                        <div>
                            <h5>{especie.name}</h5>
                            <Link to={`/species/${especie.uid}`}>detalles</Link>
                        </div>
                    </li>
                )
            })}
            
        </ul>
    
    )
}