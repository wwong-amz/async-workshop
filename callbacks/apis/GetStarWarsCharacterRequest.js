const request = require('request');

const getStarWarsCharacterRequest = (callback, charId) => {
  request(`https://swapi.co/api/people/${charId}/`, (error, response, body) => {
    if (error) {
      return callback(error, null)
    } else {
      return callback(null, JSON.parse(body));
    }
  })
}


module.exports = getStarWarsCharacterRequest;