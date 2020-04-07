const request = require('request')


const getStarWarsCharacterWithRequest = (charId, callback) => {
  request(`https://swapi.co/api/people/${charId}/`, (error, response, body) => {
    if (error) {
      callback(error, null)
    } else {
      
      callback(null, JSON.parse(body));
    }
  })
}


const getShipWithRequest = (shipId, callback) => {
  request(`https://swapi.co/api/starships/${shipId}`, (error, response, body) => {
    if (error) {
      callback(error, null)
    } else {
      callback(null, JSON.parse(body))
    }
  })
}



module.exports = {
  getShipWithRequest,
  getStarWarsCharacterWithRequest
}