var db = require("../models");

module.exports = function(app) {
  // Get all Posts
  app.get("/api/Posts", function(req, res) {
    db.Posts.findAll({ include: [db.User, db.Category] }).then(function(
      dbPosts
    ) {
      console.log(db.Posts);
      res.json(dbPosts);
    });
  });

  // Create a new post
  app.post("/api/Posts", function(req, res) {
    db.Posts.create(req.body).then(function(dbPosts) {
      res.json(dbPosts);
    });
  });

  // Get Posts by tag - order by last created
  app.get("/api/Posts", function(req, res) {
    db.Posts.findAll({}).then(function(dbPosts) {
      res.json(dbPosts);
    });
  });

  // Delete a post by id
  app.delete("/api/Posts/:id", function(req, res) {
    db.Posts.destroy({ where: { id: req.params.id } }).then(function(dbPosts) {
      res.json(dbPosts);
    });
  });
};
