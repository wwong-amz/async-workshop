const getShipIds = require('../../utils/GetShipIds');
const getStarWarsCharacterWithRequest = require('../../swapi/swapi.request').getStarWarsCharacterWithRequest;
const getShipWithRequest = require('../../swapi/swapi.request').getShipWithRequest;


const getShips = (shipIds, callback) => {
  let ships = []
  function getShipCallback (err, ship) {
    if (err) {
      callback(err, null)
    }
    ships.push(ship);
    if (ships.length === shipIds.length) {
      callback(null, ships)
    }
  }
  for (let i = 0; i < shipIds.length; i++) {
    getShipWithRequest(shipIds[i], getShipCallback);
  }
}

function characterAndShipsCallback (character, callback) {
  return function(err, ships) {
    console.log(character)
    callback(err, { character, ships });
  }
}

const getCharacterAndShipsRequest = (charId, callback) => {
  getStarWarsCharacterWithRequest(charId, function(err, char){
    if (err) {
      callback(err)
    } else {
      const done = characterAndShipsCallback(char, callback)
      const shipIds = getShipIds(char.starships);
      getShips(shipIds, done);
    }
  })
}






module.exports = getCharacterAndShipsRequest;
