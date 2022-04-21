import * as React from "react";

function ListWeakness(props){
    let pokemon = props.pokemon
    let visible = props.visible

    if(visible){
    return(
      <div>
        <h3>Weaknesses</h3>
            <ul>
              {pokemon.weaknesses.map((w) => (
                <li key={w}>{w}</li>
              ))}
            </ul>
      </div>
    )}else{
        return(
          <div></div>
        )
    }
}
    


export default ListWeakness;