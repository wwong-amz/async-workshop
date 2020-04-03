const getStartWarsCharacterRequest = require('./apis/GetStarWarsCharacterRequest');
const getCharacterAndShipsRequest = require('./apis/GetCharacterAndShipsRequest');
const getMultipleCharactersRequest = require('./apis/GetMultipleCharactersRequest');


const getStarWarsCharacter = async (charId) => {
  try {
    const character = await getStartWarsCharacterRequest(charId);
    console.log(character)
    return character;
  } catch (error) {
    throw error
  }
}

const getCharacterAndShips = async (charId) => {
  try {
    const response = await getCharacterAndShipsRequest(charId)
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
    const response = await getMultipleCharactersRequest(charIds)
    console.log(response)
    return response
  } catch (error) {
    throw error
  }
}

// getStarWarsCharacter(1);
// getCharacterAndShips(1);
// getMultipleCharacters([1, 2, 3]);
