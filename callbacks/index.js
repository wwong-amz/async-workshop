const getStarWarsCharacterRequest = require('./apis/GetStarWarsCharacterRequest');
const getCharacterAndShipsRequest = require('./apis/GetCharacterAndShipsRequest');
const getMultipleCharactersRequest = require('./apis/GetMultipleCharactersRequest');

const getStarWarsCharacter = (charId) => {
  getStarWarsCharacterRequest(function(err, data){
    if (err) console.log(err)
    console.log(data)
    return data
  }, charId)
}

const getCharacterAndStarShips = (charId) => {
  getCharacterAndShipsRequest(function(err, data) {
    if (err) console.log(err)
    console.log(' HELLOOOOOOOOO', data)
    return data
  }, charId)
}

const getMultipleCharacters = (charIds) => {
  getMultipleCharactersRequest(function(err, data){
    if (err) console.log(err)
    console.log(data)
    return data
  }, charIds)
}

// getStarWarsCharacter(1);
// getCharacterAndStarShips(1);
getMultipleCharacters([1, 2, 3]);