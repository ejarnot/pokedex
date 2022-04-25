import './App.css';
import { useState, useEffect } from "react";
import { getOptions } from "./utils/pokemon"
import  Weakness  from "./components/Weakness"
import TypeFilter from "./components/TypeFilter"
import Pokemon from "./components/Pokemon"

function App() {
  const [refList, setRefList] = useState([])
  const [displayList, setDisplayList] = useState([])
  const [searchName, setSearchName] = useState("")
  const [typeFilter, setTypeFilter] = useState("")
  const [weaknessFilter, setWeaknessFilter] = useState("")
  const [isVisible, setIsVisible] = useState(false)


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
        <label className="label">Name</label><br/>
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
        <TypeFilter 
        updateType={updateType}
        types={types}
        />
        <label className="label">Weaknesses</label>
          <Weakness 
          updateWeakness={updateWeakness} 
          weaknesses={weaknesses}
          />
      </div>
    </header>
    <div id="body-grid">
      {displayList.map((pokemon) => {
        return(
         <Pokemon pokemon={pokemon} id="pokemon-grid"/>
        )
      })}
    </div>
  </div>
)}
   

export default App
