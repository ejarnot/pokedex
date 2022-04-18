export function getOptions(list) {
    let options = list.reduce((acc, pokemon) => {
        acc.types.push(...pokemon.type)
        acc.weaknesses.push(...pokemon.weaknesses)
        return acc
    }, { types: [], weaknesses: [] })

    return { types: removeDuplicates(options.types), weaknesses: removeDuplicates(options.weaknesses) }
}

function removeDuplicates(arr) {
    return [...new Set(arr)]
}