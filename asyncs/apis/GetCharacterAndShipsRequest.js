const getShipIds = require('../../utils/GetShipIds');
const getStarWarsCharacterWithAxios = require('../../swapi/swapi.axios').getStarWarsCharacterWithAxios;
const getShipWithAxios = require('../../swapi/swapi.axios').getShipWithAxios
// Refactor to use wrapper function for api calls and the new util functoins
// Write a getShip functions
const getCharacterAndShipsWithAxios = async (charId) => {
  const character = await getStarWarsCharacterWithAxios(charId)
  const shipIds = getShipIds(character.starships);
  const ships = await getShips(shipIds)
  return {
    character,
    ships
  }
}

const getShips = (shipIds) => {
  return Promise.all(
    shipIds.map(id => getShipWithAxios(id))
  )
}

module.exports = getCharacterAndShipsWithAxios;