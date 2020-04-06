const axios = require('axios');
const getStarWarsCharacterRequest = require('../../swapi/swapi.axios').getStarWarsCharacterRequest;


const getMultipleCharactersRequest = async (charIds) => {
  const charPromises = charIds.map(async id => {
    return await getStarWarsCharacterRequest(id)
  })
  return Promise.all(charPromises);
}

getMultipleCharactersRequest([1, 2, 3]).then(res => {console.log(res)})

module.exports = getMultipleCharactersRequest;