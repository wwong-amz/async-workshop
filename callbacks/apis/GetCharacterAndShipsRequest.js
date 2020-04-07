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
    console.log (ships)
    if (ships.length === shipIds.length) {
      callback(null, ships)
    }
  }
  for (let i = 0; i < shipIds.length; i++) {
    getShipWithRequest(shipIds[i], getShipCallback);
  }
}

const getCharacterAndShipsRequest = (charId, callback) => {
  function characterAndShipsCallback (character) {
    return function(err, ships) {
      callback(err, { character, ships });
    }
  }
  getStarWarsCharacterWithRequest(charId, function(err, char){
    if (err) {
      callback(err)
    } else {
      const done = characterAndShipsCallback(char)
      const shipIds = getShipIds(char.starships);
      getShips(shipIds, done);
    }
  })
}






module.exports = getCharacterAndShipsRequest;
