const getStarWarsCharacterPromiseWithAxios = require('.././swapi/swapi.axios').getStarWarsCharacterPromiseWithAxios;
const getCharacterAndShipesRequest = require('./apis/GetCharacterAndShipsRequest');
const getMultipleCharactersPromiseWithAxios = require('./apis/GetMultipleCharactersRequest');

const getStarWarsCharacter = (charId) => {
  try {
    return getStarWarsCharacterPromiseWithAxios(charId)
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
    return getMultipleCharactersPromiseWithAxios(charIds);
  } catch (error) {
    throw error
  }
}


// getStarWarsCharacter(1);
// getCharacterAndShips(1);
getMultipleCharacters([1, 2, 3])