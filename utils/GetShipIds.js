
const getShipIds = (shipList) => {
  let shipIds = [];
  shipList.forEach(starship => {
    shipIds.push(starship.split('/')[5]);
  })
  return shipIds;
}

module.exports = getShipIds;