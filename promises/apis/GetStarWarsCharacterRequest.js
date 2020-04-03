const axios = require('axios');

const getStarWarsCharacterRequest = (charId) => {
  let character
  return axios.get(`https://swapi.co/api/people/${charId}/`)
    .then(response => {
      character = response.data
      return character
    })
    .catch(err => {throw err})
}

// getStarWarsCharacterRequestPromise(1);
module.exports = getStarWarsCharacterRequest;