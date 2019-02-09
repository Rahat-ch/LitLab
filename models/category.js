module.exports = function(sequelize, Sequelize) {
  var Category = sequelize.define("Category", {
    Type: { type: Sequelize.STRING }
  });

  Category.associate = function(models) {
    Category.hasMany(models.Posts, { onDelete: "cascade" });
    // Category.hasMany(models.Tags);
  };

  return Category;
};
