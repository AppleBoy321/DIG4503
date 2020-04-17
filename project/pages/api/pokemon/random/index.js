import { getRandomPokemon } from '../../../../models/pokemon-model';
export default (req, res) => {
    let result = {"error": "Can't find any Pokemon with this Name."};
    let pokemon = getRandomPokemon();
    if (pokemon !== null) {
        result = pokemon;
    }
    res.json(result);
}