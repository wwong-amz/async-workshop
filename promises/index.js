const getStarWarsCharacterRequest = require('./apis/GetStarWarsCharacterRequest');
const getCharacterAndShipesRequest = require('./apis/GetCharacterAndShipsRequest');
const getMultipleCharactersRequest = require('./apis/GetMultipleCharactersRequest');

const getStarWarsCharacter = (charId) => {
  try {
    return getStarWarsCharacterRequest(charId)
  } catch (error) {
    throw error
  }
}

const getCharacterAndShips = (charId) => {
  try {
    return getCharacterAndShipesRequest(charId);
  } catch (error) {
    throw error
  }
}

const getMultipleCharacters = (charIds) => {
  try {
    return getMultipleCharactersRequest(charIds);
  } catch (error) {
    throw error
  }
}


// getStarWarsCharacter(1);