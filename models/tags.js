module.exports = function(sequelize, Sequelize) {
  var Tags = sequelize.define("Tags", {
    Tag: { type: Sequelize.STRING },
    // CategoryID: { type: Sequelize.TINYINT },
    PostID: { type: Sequelize.TINYINT }
  });

  Tags.associate = function(models) {
    Tags.belongsTo(models.Category, { foreignKey: { allowNull: false } });
  };

  return Tags;
};
