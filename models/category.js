module.exports = function(sequelize, Sequelize) {
  var category = sequelize.define("category", {
    Type: { type: Sequelize.STRING }
  });
  return category;
};
