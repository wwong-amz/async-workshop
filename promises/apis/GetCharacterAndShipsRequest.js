const axios = require('axios')
const getShipIds = require('../../utils/GetShipIds')


// TODO: 
// EXTRACT HELPER FUNCTIONS
// REMOVE UNNECESSAY CHAINS
// CLEAN CHAINING SYNTAX
const getCharacterAndShips = (charId) => {
  let character;
  return axios.get(`https://swapi.co/api/people/${charId}/`)
    .then(response => {
      character = response.data
      const shipIds = getShipIds(character.starships)
      const shipPromises = shipIds.map(id => {
        return axios.get(`https://swapi.co/api/starships/${id}`)
      })
      return Promise.all(shipPromises)
    })
    .then(responses => {
      let ships = []
      responses.forEach(response => {
        ships.push(response.data)
      })
      return {
        character,
        ships
      }
    })
    .catch(err => {
      throw err
    })
}


getCharacterAndShips(1).then(res => console.log(res));

module.exports = getCharacterAndShips;