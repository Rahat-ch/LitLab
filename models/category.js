module.exports = function(sequelize, Sequelize) {
  var Category = sequelize.define("Category", {
    Type: { type: Sequelize.STRING }
  });
  return Category;
};
