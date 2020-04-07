const getStarWarsCharacterWithAxios = require('../../swapi/swapi.axios').getStarWarsCharacterWithAxios;


const getMultipleCharactersWithAxios = (charIds) => {
  const charPromises = charIds.map(async id => {
    return await getStarWarsCharacterWithAxios(id)
  })
  return Promise.all(charPromises);
}


module.exports = getMultipleCharactersWithAxios;