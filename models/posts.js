module.exports = function(sequelize, Sequelize) {
  var Posts = sequelize.define("posts", {
    PostTitle: { type: Sequelize.STRING },
    PostContent: { type: Sequelize.TEXT },
    Author: { type: Sequelize.STRING },
    PostType: { type: Sequelize.STRING }
  });
  return Posts;
};
