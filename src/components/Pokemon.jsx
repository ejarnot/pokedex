import * as React from "react";
import ListWeakness from "./Listweakness"
import ListType from "./ListType"
import { useState } from "react"; 

function Pokemon(props){
    let pokemon = props.pokemon
    const [isVisible, setIsVisible] = useState(false)

    return(         
      <div key={pokemon.id} className="list">
        <img 
            src={pokemon.img}
            onClick={(e) =>{
            setIsVisible(!isVisible)
            }
            }
        />
        <br/>
        <small>{pokemon.num}</small>
        <h3>{pokemon.name}</h3>
           <ListType pokemon={pokemon} visible={isVisible}/>
           <ListWeakness pokemon={pokemon} visible={isVisible}/>
      </div>
    )
}

export default Pokemon