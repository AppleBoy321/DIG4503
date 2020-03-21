import getPokemon from 'json-pokemon/getPokemon';

export default (req, res) => {

    let result = {"error": "Could not find id."};

    const id = parseInt(req.query.id);

    let pokemon = getPokemon.getPokemonById(id);

    if(pokemon !== null) {
        result = pokemon;
    }

    res.json(result);

}