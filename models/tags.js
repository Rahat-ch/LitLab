module.exports = function(sequelize, Sequelize) {
  var tags = sequelize.define("tags", {
    PostID: { type: Sequelize.TINYINT },
    TagName: { type: Sequelize.STRING },
    CategoryID: { type: Sequelize.TINYINT }
  });
  return tags;
};
