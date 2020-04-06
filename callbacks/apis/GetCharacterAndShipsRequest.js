const request = require('request');
const getShipIds = require('../../utils/GetShipIds');
const getStarWarsCharacterRequet = require('./GetStarWarsCharacterRequest')


const getCharacterAndShipsRequest = (charId, callback) => {
  getStarWarsCharacterRequet(charId, function(err, char){
    if (err) {
      console.log(err)
    } else {
      const shipIds = getShipIds(char.starships);
      getShips(shipIds, function(err, ships) {
        if(err) {
          console.log(err)
        } else {
          callback(null, { char, ships })
        }
      })
    }
  })
}



const getShips = (shipIds, callback) => {
  let ships = []
  for (let i = 0; i < shipIds.length; i++ ) {
    getShipCallback(shipIds[i], function(err, data) {
      if (err) {
        console.log(err)
      } else {
        ships.push(data)
      }
      if (i === shipIds.length - 1) {
        callback(null, ships)
      }
    })
  }
}

const getShipCallback = (shipId, callback) => {
  request(`https://swapi.co/api/starships/${shipId}`, (error, response, body) => {
    if (error) {
      callback(error, null)
    } else {
      callback(null, JSON.parse(body))
    }
  })
}

module.exports = getCharacterAndShipsRequest;
