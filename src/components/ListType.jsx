import * as React from "react";

function ListType(props){
    let pokemon = props.pokemon
    let visible = props.visible
    
    if(visible){
        return(
        <div>
            <h3>Type</h3>
              <ul>
                {pokemon.type.map((t) =>(
              <li key={t}>{t}</li>
             ))}
              </ul>
        </div>
        )
    }else{
        return(
            <div></div>
        )
    }
}

export default ListType