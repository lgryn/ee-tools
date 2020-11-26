const items = require('../models/itemsModel');

module.exports = {
  addRows(data) {
    const formattedData = [];
    data.forEach(item => {
      const formattedItem = {
        game_id: item.gameId,
        icon_id: item.iconId,
        name: item.name,
        slug: item.slug,
        price_buy: item.price.priceBuy,
        price_sell: item.price.priceSell
      };
      formattedData.push(formattedItem);
    });
    
    return items.addAll(formattedData);
  },
  deleteRows() {
    return items.removeAll();
  }
};
