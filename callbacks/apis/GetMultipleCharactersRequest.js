const request = require('request');

const getMultipleCharactersRequest = (callback, charIds) => {
  let characters = [];
  // for (let i = 0; i < charIds.length; i++) {
  //   getStarWarsCharacterRequest(function(err, data) {
  //     if (err)console.log(err)
  //     charactes = data
  //   }, charIds[i], characters)
    // request(`https://swapi.co/api/people/${charIds[i]}`, (error, response, body) => {
    //   if (error) {
    //     return callback(null, error)
    //   } else {
    //     if (i === charIds.length - 1) {
    //       characters.push(JSON.parse(body))
    //       console.log('FINAL CALLBACK', characters)
    //       // return callback(characters, false)
    //     } else {
    //       console.log('BODY', JSON.parse(body))
    //       characters.push(JSON.parse(body));
    //     }
    //   }
    // })
  // }
  
  request(`https://swapi.co/api/people/${charIds[0]}`, (error, response, body) => {
    if (error) {
      return callback(null, error)
    } else {
      characters.push(JSON.parse(body))
      request(`https://swapi.co/api/people/${charIds[1]}`, (error, response, body) => {
        if (error) {
          return callback(null, error)
        } else {
          characters.push(JSON.parse(body))
          request(`https://swapi.co/api/people/${charIds[2]}`, (error, response, body) => {
            if (error) {
              return callback(null, error)
            } else {
              characters.push(JSON.parse(body))
              console.log(characters)
            }
          })
        }
      })
    }
  })
}

// const getStarWarsCharacterRequest = (callback, charId, charArr) => {
//   request(`https://swapi.co/api/people/${charId}/`, (error, response, body) => {
//     if(!error && response.statusCode === 200) {
//       const result = JSON.parse(body)
//       charArr.push(result)
//       return callback(charArr, false)
//     } else {
//       return callback(null, error)
//     }
//   })
// }

module.exports = getMultipleCharactersRequest;