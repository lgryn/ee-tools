exports.seed = async function(knex) {
  await knex('rarity').del();
  await knex('rarity').insert([
    { name: 'common' },
    { name: 'uncommon' },
    { name: 'special' },
    { name: 'rare' },
    { name: 'precious' },
  ]);
  await knex('ores').del();
    return knex('ores').insert([
      { name: 'Veldspar', volume: 0.1, rarity_id: 1, security: JSON.stringify({ high: +1, low: -1 }) },
      { name: 'Plagioclase', volume: 0.35, rarity_id: 1, security: JSON.stringify({ high: +0.8, low: -0.3 }) },
      { name: 'Scordite', volume: 0.15, rarity_id: 1, security: JSON.stringify({ high: +0.8, low: -0.3 }) },
      { name: 'Omber', volume: 0.6, rarity_id: 2, security: JSON.stringify({ high: +0.6, low: +0.3 }) },
      { name: 'Pyroxeres', volume: 1.5, rarity_id: 2, security: JSON.stringify({ high: +0.4, low: -1 }) },
      { name: 'Kernite', volume: 1.2, rarity_id: 2, security: JSON.stringify({ high: +0.6, low: +0.1 }) },
      { name: 'Dark Ochre', volume: 1.6, rarity_id: 2, security: JSON.stringify({ high: +0.4, low: -1 }) },
      { name: 'Gneiss', volume: 2, rarity_id: 3, security: JSON.stringify({ high: +0.4, low: -1 }) },
      { name: 'Spodumain', volume: 3.2, rarity_id: 3, security: JSON.stringify({ high: +0.2, low: -1 }) },
      { name: 'Hemorphite', volume: 3, rarity_id: 3, security: JSON.stringify({ high: +0.2, low: -1 }) },
      { name: 'Hedbergite', volume: 3, rarity_id: 4, security: JSON.stringify({ high: 0, low: -1 }) },
      { name: 'Jaspet', volume: 4, rarity_id: 4, security: JSON.stringify({ high: 0, low: -1 }) },
      { name: 'Crokite', volume: 6.4, rarity_id: 4, security: JSON.stringify({ high: -0.2, low: -1 }) },
      { name: 'Bistot', volume: 6.4, rarity_id: 5, security: JSON.stringify({ high: -0.4, low: -1 }) },
      { name: 'Arkonor', volume: 6.6, rarity_id: 5, security: JSON.stringify({ high: -0.6, low: -1 }) },
      { name: 'Mercoxit', volume: 8, rarity_id: 5, security: JSON.stringify({ high: -0.8, low: -1 }) },
    ]);
};
