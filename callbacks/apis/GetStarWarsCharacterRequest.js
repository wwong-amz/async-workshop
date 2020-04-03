const request = require('request');

const getStarWarsCharacterRequest = (callback, charId) => {
  request(`https://swapi.co/api/people/${charId}/`, (error, response, body) => {
    if(!error && response.statusCode === 200) {
      const result = JSON.parse(body)
      return callback(result, false)
    } else {
      return callback(null, error)
    }
  })
}


module.exports = getStarWarsCharacterRequest;