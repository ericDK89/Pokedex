export const searchPokemon = async (pokemon) => {
    try {
        let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
        const res = await fetch(url)
            return res.json()
    } catch (error) {
        console.log(error);
    }
}

export const getPokemon = async (limit = 50, offset = 0) => {
    try {
        let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
        const res = await fetch(url)
            return res.json()
    } catch (error) {
        console.log(error);
    }
}
export const getPokemonData = async (url) => {
    try {
        const res = await fetch(url)
            return res.json()
    } catch (error) {
        console.log(error);
    }
}
