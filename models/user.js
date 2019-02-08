module.exports = function(sequelize, Sequelize) {
  var User = sequelize.define("User", {
    username: { type: Sequelize.TEXT },
    email: { type: Sequelize.STRING, validate: { isEmail: true } },
    password: { type: Sequelize.STRING, allowNull: false },
    status: {
      type: Sequelize.ENUM("active", "inactive"),
      defaultValue: "active"
    }
  });

  User.associate = function(models) {
    User.hasMany(models.Posts, { onDelete: "cascade" });
  };

  return User;
};
