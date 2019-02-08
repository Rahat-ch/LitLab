module.exports = function(sequelize, Sequelize) {
  var Posts = sequelize.define("Posts", {
    PostTitle: { type: Sequelize.STRING },
    PostContent: { type: Sequelize.TEXT },
    PostType: { type: Sequelize.STRING }
  });

  Posts.associate = function(models) {
    Posts.belongsTo(models.User, { foreignKey: { allowNull: false } });
  };

  return Posts;
};
