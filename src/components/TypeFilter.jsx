import * as React from "react";

function TypeFilter(props){
    let types = props.types
    let updateType = props.updateType

    return(
      <div>
        <select 
        onChange={(e) => updateType(e.target.value)} 
        name="searchType" 
        id="searchType"
        >
        <option value={""}>Select Type</option>
        {types.map((t) => <option key={t} value={t}>{t}</option>)}
      </select>
      </div>
    )
}
export default TypeFilter