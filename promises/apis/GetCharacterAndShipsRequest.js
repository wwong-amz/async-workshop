const axios = require('axios')


const getCharacterAndShips = (charId) => {
  return axios.get(`https://swapi.co/api/people/${charId}/`)
    .then(response => {
      const character = response.data
      const shipIds = []
      response.data.starships.forEach(ship => {
        const shipSplit = ship.split('/')
        shipIds.push(shipSplit[5])
      })
      return {
        character,
        shipIds
      }
    }).then(res => {
      const character = res.character
      const shipPromises = res.shipIds.map(id => {
        return axios.get(`https://swapi.co/api/starships/${id}`)
      })
      return Promise.all(shipPromises).then(responses => {
        let ships = []
        responses.forEach(response => {
          ships.push(response.data)
        })
        return {
          character,
          ships
        }
      })
    })
    .catch(err => {
      throw err
    })
}


module.exports = getCharacterAndShips