import './App.css';
import { useState, useEffect } from "react";
import { getOptions } from "./utils/pokemon"

function App() {
  const [refList, setRefList] = useState([])
  const [displayList, setDisplayList] = useState([])
  const [searchName, setSearchName] = useState("")
  const [typeFilter, setTypeFilter] = useState("")
  const [weaknessFilter, setWeaknessFilter] = useState("")

  async function fetchPokemon() {
    let res = await fetch(
      "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json"
    );
    let data = await res.json();
    setRefList(data.pokemon)
    setDisplayList(data.pokemon)
  }

  function searchPokemon(name, type, weakness){
    console.log(name, type, weakness);
    if (searchName != name) setSearchName(name);

    let filteredList = refList.filter(
      (pokemon) => {
        console.log(pokemon.name, name, pokemon.name.toLowerCase().includes(name.toLowerCase()))
        return (pokemon.name.toLowerCase().includes(name.toLowerCase())) && 
        (type !== "" ? pokemon.type.includes(type) : true)
        && (weakness !== "" ? pokemon.weaknesses.includes(weakness) : true)
      }
    );

    console.log(filteredList)
    setDisplayList(filteredList)
  }


function updateType(type){
  console.log(type)
    setTypeFilter(type)
    searchPokemon(searchName, type, weaknessFilter)
}

function updateWeakness(weakness){
  console.log(weakness)
    setWeaknessFilter(weakness);
    searchPokemon(searchName, typeFilter, weakness) 
}
//make image into button that shows Type and Weaknesses instead of displaying outright

  useEffect(() =>{
    fetchPokemon()
  },[])

  let { types, weaknesses } = getOptions(refList);

  return(
    <div>
      <header>
      <h1 id="title">Pokedex</h1>
      <div id="searchBar">
        <label className="label">Name</label>
        <input
          type="text"
          id="searchName"
          className="searchName"
          placeholder="ex: Blastoise"
          value={searchName}
          onChange={(e) => searchPokemon(e.target.value, typeFilter, weaknessFilter)}
        >
        
        </input><br/>
        <label className="label">Type</label>
        <select 
          onChange={(e) => updateType(e.target.value)} 
          name="searchType" 
          id="searchType"
        >
          <option value={""}>Select Type</option>
          {types.map((t) => <option key={t} value={t}>{t}</option>)}
        </select><br/>
        <label className="label">Weaknesses</label>
        <select onChange={(e) => updateWeakness(e.target.value)} name="searchWeakness" id="searchWeakness">
          <option value={""}>Select Weakness</option>
          {weaknesses.map((w) => <option key={w} value={w}>{w}</option>)}
        </select>
      </div>
    </header>
    <div>
      {displayList.map((pokemon) => {
        return(
          <div key={pokemon.id}>
            <img 
            src={pokemon.img}
            
            /><br/>
            <small>{pokemon.num}</small>
            <h3>{pokemon.name}</h3>
            <h3>Type</h3>
              <ul>
                {pokemon.type.map((t) =>(
                  <li key={t}>{t}</li>
                ))}
              </ul>
            <h3>Weaknesses</h3>
              <ul>
                {pokemon.weaknesses.map((w) => (
                  <li key={w}>{w}</li>
                ))}
              </ul>
          </div>
        )
      })}
    </div>
  </div>
)}
   

export default App
