const axios = require('axios');

const getStarWarsCharacterRequest = (charId) => {
  return axios.get(`https://swapi.co/api/people/${charId}/`)
    .then(response => {
      return response.data
    })
    .catch(err => {throw err})
}

// getStarWarsCharacterRequestPromise(1);
module.exports = getStarWarsCharacterRequest;