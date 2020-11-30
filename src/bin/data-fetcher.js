const axios = require('axios');
const csv = require('csvtojson');
const pricesService = require('../services/pricesService');

async function getData() {
  try {
    const response = await axios.get('https://api.eve-echoes-market.com/market-stats/stats.csv');
    const rows = await csv().fromString(response.data);
    await pricesService.deleteRows();
    await pricesService.addRows(rows);
  } catch (e) {
    console.log(e);
  }
}

getData().then(() => process.exit());
