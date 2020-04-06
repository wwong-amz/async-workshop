const axios = require('axios');

const getMultipleCharactersRequest = (charIds) => {
  const characterPromises = charIds.map(id => {
    return axios.get(`https://swapi.co/api/people/${id}`)
  })
  return Promise.all(characterPromises)
  .then(responses => {
    return responses.map(response => response.data)
  })
}

module.exports = getMultipleCharactersRequest;