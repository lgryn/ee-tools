const oresModel = require("../models/oresModel");

module.exports = {
  async profitByM3() {
    const ores = await oresModel.getWithPrice();
    return ores
      .map((ore) => {
        ore.profitByM3 = ((1 / ore.volume) * ore.sell).toFixed(2);
        return ore;
      })
      .sort((a, b) => b.profitByM3 - a.profitByM3);
  },
};
