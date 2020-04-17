
import data from 'json-pokemon/data.json';

/**
 * Returns a random pokemon.
 *
 * @returns {Pokemon} - A single pokemon.
 */
function getRandomPokemon() {
  return data[Math.floor(Math.random() * data.length)];
};

/**
 * Returns a random pokemon.
 *
 * @returns {Array<Pokemon>} - List of pokemons ordered by id.
 */
function getAllPokemonList() {
  return data;
};

module.exports.getRandomPokemon = getRandomPokemon;
module.exports.getAllPokemonList = getAllPokemonList;