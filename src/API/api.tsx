const fetchAllPokemon = async () => {
    const APIendpoint = "https://pokeapi.co/api/v2/pokemon?limit=100&offset=200"
    const data = await (await fetch(APIendpoint)).json();
    return data
};

export { fetchAllPokemon };

