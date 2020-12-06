const prices = require("../models/pricesModel");

module.exports = {
  addRows(data) {
    const formattedData = [];

    data.forEach((item) => {
      const formattedItem = {
        item_id: item.item_id,
        name: item.name,
        sell: item.sell || null,
        buy: item.buy || null,
      };
      formattedData.push(formattedItem);
    });

    return prices.addAll(formattedData);
  },
  deleteRows() {
    return prices.removeAll();
  },
};
