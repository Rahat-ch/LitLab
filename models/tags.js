module.exports = function(sequelize, Sequelize) {
  var tags = sequelize.define("tags", {
    TagName: { type: Sequelize.STRING },
    CategoryID: { type: Sequelize.TINYINT },
    PostID: { type: Sequelize.TINYINT }
  });
  return tags;
};
