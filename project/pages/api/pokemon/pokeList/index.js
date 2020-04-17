import { getAllPokemonList } from '../../../../models/pokemon-model';
export default (req, res) => {
    let result = {"error": "No Pokemon can be found at this time."};
    let pokemon = getAllPokemonList();
    if (pokemon !== null) {
        result = pokemon;
    }
    res.json(result);
}