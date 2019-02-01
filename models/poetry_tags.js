module.exports = function(sequelize, Sequelize) {
  var poetryTags = sequelize.define("poetrytags", {
    PostTitle: { type: Sequelize.STRING },
    Haiku: { type: Sequelize.BOOLEAN, defaultValue: false },
    Limerick: { type: Sequelize.BOOLEAN, defaultValue: false },
    Sonnet: { type: Sequelize.BOOLEAN, defaultValue: false }
  });
  return poetryTags;
};
