const getStarWarsCharacterWithRequest = require('../../swapi/swapi.request').getStarWarsCharacterWithRequest;


const getMultipleCharactersRequest = (callback, charIds) => {
  let characters = [];
  function getCharacterCallback (err, char) {
    if (err) {
      callback(err, null);
    }
    characters.push(char)
    if (characters.length === charIds.length) {
      callback(null, characters);
    }
  }
  for (let i = 0; i < charIds.length; i++) {
    getStarWarsCharacterWithRequest(charIds[i], getCharacterCallback)
  }
}


module.exports = getMultipleCharactersRequest;