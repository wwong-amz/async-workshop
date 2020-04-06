const request = require('request');

const getMultipleCharactersRequest = (callback, charIds) => {
  let characters = [];
  for (let i = 0; i < charIds.length; i++) {
    request(`https://swapi.co/api/people/${charIds[i]}`, (error, response, body) => {
      if (error) {
        return callback(null, error)
      } else {
        characters.push(JSON.parse(body));
        if (i === charIds.length - 1) {
          return callback(null, characters);
        }
      }
    })
  }
}


module.exports = getMultipleCharactersRequest;