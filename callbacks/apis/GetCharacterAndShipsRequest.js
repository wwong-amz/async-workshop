const request = require('request');

const getCharacterAndShipsRequest = (callback, charId) => { 
  let characterAndShips = {}
  request(`https://swapi.co/api/people/${charId}/`, (error, response, body) => {
    if (error) {
      return callback(null, error)
    } else {
      let shipIds = [];
      let ships = [];
      const character = JSON.parse(body)
      characterAndShips.character = character
      const shipList = character.starships
      shipList.forEach(ship => {
        shipIds.push(ship.split('/')[5])
      })
      console.log(shipIds)
      for(let i = 0; i < shipIds.length; i++) {
        request(`https://swapi.co/api/starships/${shipIds[i]}`, (error, response, body) => {
          if (error) {
            callback(null, error)
          } else {
            if (i === shipIds.length - 1) {
              ships.push(JSON.parse(body))
              characterAndShips.ships = ships
              return callback(characterAndShips, false)
            } else {
              ships.push(JSON.parse(body))
            }
          }
        })
      }
    }
  })
}

module.exports = getCharacterAndShipsRequest;
