const axios = require("axios");
const csv = require("csvtojson");
const pricesService = require("../services/pricesService");
const reprocessingService = require("../services/reprocessingService");

async function getData(url, service) {
  try {
    console.log("GET: " + url);
    const response = await axios.get(url);
    const rows = await csv().fromString(response.data);
    await service.deleteRows();
    await service.addRows(rows);
  } catch (e) {
    console.log(e);
  }
}

async function main() {
  await getData(
    "https://api.eve-echoes-market.com/market-stats/stats.csv",
    pricesService
  );
  await getData(
    "https://raw.githubusercontent.com/eve-echoes-db/reprocessing/main/reprocessing.csv",
    reprocessingService
  );
}

main().then(() => process.exit());
