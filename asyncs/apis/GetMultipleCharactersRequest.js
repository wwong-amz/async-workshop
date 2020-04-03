const axios = require('axios');

const getMultipleCharactersRequest = async (charIds) => {
  let characters = [];
  const charPromises = charIds.map(async id => {
    const response = await axios.get(`https://swapi.co/api/people/${id}`)
    characters.push(response.data)
  })
  await Promise.all(charPromises)
  return characters;
}

module.exports = getMultipleCharactersRequest;