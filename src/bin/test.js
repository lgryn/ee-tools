const oresModel = require('../models/oresModel');

async function main () {
  const ores = await oresModel.getWithPrice();
  console.log(ores);
}

main().then(() => process.exit());
