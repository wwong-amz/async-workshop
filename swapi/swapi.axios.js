const axios = require('axios')

const getStarWarsCharacterWithAxios = async (charId) => {
  const response = await axios.get(`https://swapi.co/api/people/${charId}/`);
  return response.data
}

const getStarWarsCharacterPromiseWithAxios = (charId) => {
  return axios.get(`https://swapi.co/api/people/${charId}/`)
    .then(response => response.data)
    .catch(err => {throw err})
}


const getShipWithAxios = async (shipId) => {
  const response = await axios.get(`https://swapi.co/api/starships/${shipId}`)
  return response.data
}

const getShipPromiseWithAxios = (shipId) => {
  return axios.get(`https://swapi.co/api/starships/${shipId}`)
    .then(response => response.data)
    .catch(err => {throw err})
}


module.exports = {
  getStarWarsCharacterWithAxios,
  getShipWithAxios,
  getStarWarsCharacterPromiseWithAxios,
  getShipPromiseWithAxios
}