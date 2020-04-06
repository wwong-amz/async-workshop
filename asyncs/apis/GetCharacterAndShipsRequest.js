const axios = require('axios');
const getShipIds = require('../../utils/GetShipIds');
const getStarWarsCharacterRequest = require('../../swapi/swapi.axios').getStarWarsCharacterRequest;

// Refactor to use wrapper function for api calls and the new util functoins
// Write a getShip functions
const getCharacterAndShipsRequest = async (charId) => {
  const character = await getStarWarsCharacterRequest(charId)
  const shipIds = getShipIds(character.starships);
  const ships = await getShips(shipIds)
  return {
    character,
    ships
  }
}

const getShips = async (shipIds) => {
  return Promise.all(
    shipIds.map(async id => {
      const ship = await getShipAsync(id)
      return ship
    })
  )
}

const getShipAsync = async (shipId) => {
  const response = await axios.get(`https://swapi.co/api/starships/${shipId}`)
  return response.data
}

getCharacterAndShipsRequest(1).then(res => console.log(res));

module.exports = getCharacterAndShipsRequest;