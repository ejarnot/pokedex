import * as React from "react";
import ListWeakness from "./Listweakness"
import { useState } from "react"; 

function Pokemon(props){
    let pokemon = props.pokemon
    const [isVisible, setIsVisible] = useState(false)

    return(         
      <div key={pokemon.id}>
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
        <h3>Type</h3>
          <ul>
            {pokemon.type.map((t) =>(
              <li key={t}>{t}</li>
            ))}
          </ul>
           <ListWeakness pokemon={pokemon} visible={isVisible}/>
      </div>
    )
}

export default Pokemon