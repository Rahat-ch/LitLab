module.exports = function(sequelize, Sequelize) {
  var songTags = sequelize.define("songtags", {
    PostTitle: { type: Sequelize.STRING },
    HipHop: { type: Sequelize.BOOLEAN, defaultValue: false },
    Rock: { type: Sequelize.BOOLEAN, defaultValue: false },
    Opera: { type: Sequelize.BOOLEAN, defaultValue: false }
  });
  return songTags;
};
