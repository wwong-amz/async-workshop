const getStarWarsCharacterRequest = require('.././swapi/swapi.request').getStarWarsCharacterRequest;
const getCharacterAndShipsRequest = require('./apis/GetCharacterAndShipsRequest');
const getMultipleCharactersRequest = require('./apis/GetMultipleCharactersRequest');

const getStarWarsCharacter = (charId) => {
  getStarWarsCharacterRequest(charId, function(err, data){
    if (err) console.log(err)
    console.log(data)
    return data
  })
}

const getCharacterAndStarShips = (charId) => {
  getCharacterAndShipsRequest(charId, function(err, data) {
    if (err) console.log(err)
    console.log(' HELLOOOOOOOOO', data)
    return data
  })
}

const getMultipleCharacters = (charIds) => {
  getMultipleCharactersRequest(function(err, data){
    if (err) console.log(err)
    console.log(data)
    return data
  }, charIds)
}

getStarWarsCharacter(1);
// getCharacterAndStarShips(1);
// getMultipleCharacters([1, 2, 3]);