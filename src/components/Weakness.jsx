import * as React from "react";




function Weakness(props){
    let weaknesses = props.weaknesses
    let updateWeakness = props.updateWeakness

    return(
        <div>
        <select onChange={(e) => updateWeakness(e.target.value)} name="searchWeakness" id="searchWeakness">
        <option value={""}>Select Weakness</option>
            {weaknesses.map((w) => <option key={w} value={w}>{w}</option>)}
        </select>
        </div>
    )}


export default Weakness