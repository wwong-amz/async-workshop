const getShipIds = require('../../utils/GetShipIds')
const getShipPromiseWithAxios = require('../../swapi/swapi.axios').getShipPromiseWithAxios
const getStarWarsCharacterPromiseWithAxios = require('../../swapi/swapi.axios').getStarWarsCharacterPromiseWithAxios


const getCharacterAndShips = (charId) => {
  return getStarWarsCharacterPromiseWithAxios(charId)
    .then(response => {
      const character = response
      const shipIds = getShipIds(character.starships)
      const shipPromises = shipIds.map(id => getShipPromiseWithAxios(id))
      return Promise.all([character, ...shipPromises])
    })
    .then(responses => {
      const [character, ...ships] = responses
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