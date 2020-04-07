const getStarWarsCharacterWithAxios = require('.././swapi/swapi.axios').getStarWarsCharacterWithAxios;
const getCharacterAndShipsWithAxios = require('./apis/GetCharacterAndShipsRequest');
const getMultipleCharactersWithAxios = require('./apis/GetMultipleCharactersRequest');


const getStarWarsCharacter = async (charId) => {
  try {
    const character = await getStarWarsCharacterWithAxios(charId);
    console.log(character)
    return character;
  } catch (error) {
    throw error
  }
}

const getCharacterAndShips = async (charId) => {
  try {
    const response = await getCharacterAndShipsWithAxios(charId)
    console.log(response)
    const character = response.character;
    const ships = response.ships
    return {
      character,
      ships
    }
  } catch (error) {
    
  }
}

const getMultipleCharacters = async (charIds) => {
  try {
    const response = await getMultipleCharactersWithAxios(charIds)
    console.log(response)
    return response
  } catch (error) {
    throw error
  }
}

getStarWarsCharacter(1);
// getCharacterAndShips(1);
// getMultipleCharacters([1, 2, 3]);
