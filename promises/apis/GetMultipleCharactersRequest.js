const getStarWarsCharacterPromiseWithAxios = require('../../swapi/swapi.axios').getStarWarsCharacterPromiseWithAxios;

const getMultipleCharactersPromiseWithAxios = (charIds) => {
  const characters = charIds.map(id => getStarWarsCharacterPromiseWithAxios(id))
  return Promise.all(characters)
}

getMultipleCharactersPromiseWithAxios([1, 2, 3]).then(res => console.log(res))

module.exports = getMultipleCharactersPromiseWithAxios;