const model = require('../models/reprocessingModel');

module.exports = {
  addRows(data) {
    const formattedData = [];
    
    data.forEach(item => {
      const formattedItem = {
        skill: item.Skill,
        item: item.Item,
        component: item.Component,
        amount: item.Amount,
      };
      formattedData.push(formattedItem);
    });
    
    return model.addAll(formattedData);
  },
  deleteRows() {
    return model.removeAll();
  }
};
