module.exports = function(sequelize, Sequelize) {
  var Posts = sequelize.define("Posts", {
    PostTitle: { type: Sequelize.STRING },
    PostContent: { type: Sequelize.TEXT },
    PostDescription: { type: Sequelize.TEXT }
  });

  Posts.associate = function(models) {
    Posts.belongsTo(models.User, { foreignKey: { allowNull: false } });
    Posts.belongsTo(models.Category, { foreignKey: { allowNull: false } });
  };

  return Posts;
};
