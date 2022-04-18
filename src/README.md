Display list of Pokemon 
    How do I display a list?
        List component
        search by select (for type and weakness)
    show "name" "num" "type" "weaknesses"
    
    
fetch request
    render on a list
    filter by name
    implement type and weakness filters

I WANT TO MAKE IT SO WHEN YOU CLICK ON THE PICTURE, IT TAKES YOU TO THE POKEMON'S INFO


  function filterPokemon(name, types, weaknesses) {
    setSearchName(name);

    let filteredList = refList.filter(
      (pokemon) =>
        pokemon.name.toLowerCase().includes(name.toLowerCase()) &&
        pokemon.type.filter((type) => types.includes(type)).length >= types.length &&
        pokemon.weaknesses.filter((weakness) => weaknesses.includes(weakness)).length >= weaknesses.length
    )
  }


  let { types, weaknesses } = getKnownAttributes(data.pokemon);