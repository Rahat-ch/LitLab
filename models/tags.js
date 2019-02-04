module.exports = function(sequelize, Sequelize) {
  var tags = sequelize.define("tags", {
    Tag: { type: Sequelize.STRING },
    CategoryID: { type: Sequelize.TINYINT }
  });
  return tags;
};
