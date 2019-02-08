module.exports = function(sequelize, Sequelize) {
  var Tags = sequelize.define("Tags", {
    Tag: { type: Sequelize.STRING },
    CategoryID: { type: Sequelize.TINYINT },
    PostID: { type: Sequelize.TINYINT }
  });
  return Tags;
};
