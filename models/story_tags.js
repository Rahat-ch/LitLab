module.exports = function(sequelize, Sequelize) {
  var storyTags = sequelize.define("storytags", {
    PostTitle: { type: Sequelize.STRING },
    Fable: { type: Sequelize.BOOLEAN, defaultValue: false },
    FlashFiction: { type: Sequelize.BOOLEAN, defaultValue: false },
    SketchStory: { type: Sequelize.BOOLEAN, defaultValue: false }
  });
  return storyTags;
};
