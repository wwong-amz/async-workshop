const axios = require('axios');
const getShipIds = require('../../utils/GetShipIds');

// Refactor to use wrapper function for api calls and the new util functoins
// Write a getShip functions
const getCharacterAndShipsRequest = async (charId) => {
  const response = await axios.get(`https://swapi.co/api/people/${charId}/`)
  const character = response.data;
  let shipIds = getShipIds(character.starships);
  let ships = [];
  const shipPromises = shipIds.map(async id => {
    const response = await axios.get(`https://swapi.co/api/starships/${id}`);
    ships.push(response.data)
  })
  await Promise.all(shipPromises)
  return {
    character,
    ships
  }
}

getCharacterAndShipsRequest(1).then(res => console.log(res));

module.exports = getCharacterAndShipsRequest;