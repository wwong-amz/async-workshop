const axios = require('axios');

const getMultipleCharactersRequest = (charIds) => {
  const characterPromises = charIds.map(id => {
    return axios.get(`https://swapi.co/api/people/${id}`)
  })
  return Promise.all(characterPromises).then(responses => {
    let characters = [];
    responses.forEach(response => {
      characters.push(response.data)
    })
    return characters
  })
}

console.log(getMultipleCharactersRequest([1, 2, 3]).then(res => console.log(res)))

module.exports = getMultipleCharactersRequest;