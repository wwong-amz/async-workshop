const axios = require('axios');


const getCharacterAndShipsRequest = async (charId) => {
  const response = await axios.get(`https://swapi.co/api/people/${charId}/`)
  const character = response.data;
  let shipIds = [];
  let ships = [];
  let shipPromises;
  let starshipList = character.starships;
  starshipList.forEach(starship => {
    shipIds.push(starship.split('/')[5]);
  })
  shipPromises = shipIds.map(async id => {
    const response = await axios.get(`https://swapi.co/api/starships/${id}`);
    ships.push(response.data)
  })
  await Promise.all(shipPromises)
  return {
    character,
    ships
  }
}

module.exports = getCharacterAndShipsRequest;