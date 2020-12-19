const oresModel = require("../../../services/oresService");

module.exports = {
  ores: () => {
    return oresModel.profitByM3();
  },
};
