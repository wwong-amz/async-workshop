const getStarWarsCharacterPromiseWithAxios = require('../../swapi/swapi.axios').getStarWarsCharacterPromiseWithAxios;

const getMultipleCharactersPromiseWithAxios = (charIds) => {
  const characters = charIds.map(id => getStarWarsCharacterPromiseWithAxios(id))
  return Promise.all(characters)
}

module.exports = getMultipleCharactersPromiseWithAxios;