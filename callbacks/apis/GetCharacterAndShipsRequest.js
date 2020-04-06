const request = require('request');
const getShipIds = require('../../utils/GetShipIds')

const getCharacterAndShipsRequest = (callback, charId) => {
  let characterAndShips = {}
  request(`https://swapi.co/api/people/${charId}/`, (error, response, body) => {
    if (error) {
      return callback(error, null)
    } else {
      let ships = [];
      const character = JSON.parse(body)
      let shipIds = getShipIds(character.starships);
      characterAndShips.character = character
      for (let i = 0; i < shipIds.length; i++) {
          getShipCallback(function (err, data) {
            if (err) {
              console.log(err)
            } else {
              ships.push(data)
            }
            if (i === shipIds.length - 1) {
              characterAndShips.ship = ships
              return callback(null, characterAndShips)
            }
          }, shipIds[i])
      }
    }
  })
}

const getShipCallback = (callback, shipId) => {
  request(`https://swapi.co/api/starships/${shipId}`, (error, response, body) => {
    if (error) {
      return callback(error, null)
    } else {
      return callback(null, JSON.parse(body))
    }
  })
}

module.exports = getCharacterAndShipsRequest;
