const request = require('request');

const getStarWarsCharacterRequest = (charId, callback) => {
  request(`https://swapi.co/api/people/${charId}/`, (error, response, body) => {
    if (error) {
      callback(error, null)
    } else {
      callback(null, JSON.parse(body));
    }
  })
}


module.exports = getStarWarsCharacterRequest;