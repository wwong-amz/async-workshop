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
    return getCharacterAndShipesRequest();
  } catch (error) {
    throw error
  }
}

const getMultipleCharacters = (charIds) => {
  try {
    return getMultipleCharactersRequest();
  } catch (error) {
    throw error
  }
}


getStarWarsCharacter(1);