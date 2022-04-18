//what i want it to do:
    //on click, show type
    //on click, show weakness
    //on second click, hide type and weakness

function ClickImage(){
    const [typeList, setTypeList] = useState([]);
    const [weaknessList, setWeaknessList] = useState([]);

    function showAttributes(){
        //initially don't want to see the lists
        setTypeList(pokemon.type);
        setWeaknessList(pokemon.weakness);
        typeList=false
        weaknessList=false 
        //if lists are not seen, then click and see them
        if(typeList == false && weaknessList == false){
            return
        }else{
            return 
        }

        //if lists are seen, then click to hide them
    }

    return(
        <div>
            <img onClick={showAttributes}></img>
        </div>
    )
}

export default Image