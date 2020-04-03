const axios = require('axios');

const getStarWarsCharacterRequest = async (charId) => {
  const response = await axios.get(`https://swapi.co/api/people/${charId}/`);
  return response.data
}

module.exports = getStarWarsCharacterRequest;