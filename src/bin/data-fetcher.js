const axios = require('axios');
const itemsService = require('../services/itemsService');

async function getData(name) {
  const baseUrl = `https://immortal-eve-api.azurewebsites.net/api/${name}/list`;
  
  try {
    const response = await axios.get(baseUrl);
    const data = response.data[name];
    console.log(`> ${data.length} ${name} fetched`);
    await itemsService.addRows(data);
  } catch (e) {
    console.log(e);
  }
}

async function main() {
  await itemsService.deleteRows();
  await getData('ores');
  await getData('minerals');
}

main().then(() => process.exit());
