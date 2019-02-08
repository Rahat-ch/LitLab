var db = require("../models");

module.exports = function(app) {
  // Get all posts
  app.get("/api/posts", function(req, res) {
    db.Posts.findAll({ include: [db.User, db.Category] }).then(function(
      dbPosts
    ) {
      console.log(db.Posts);
      res.json(dbPosts);
    });
  });

  // Create a new post
  app.post("/api/posts", function(req, res) {
    db.Posts.create(req.body).then(function(dbPosts) {
      res.json(dbPosts);
    });
  });

  // Edit a post
  app.put("/api/posts", function(req, res) {
    db.Posts.update(req.body).then(function(dbPosts) {
      res.json(dbPosts);
    });
  });

  // Delete a post by id
  app.delete("/api/posts/:id", function(req, res) {
    db.posts.destroy({ where: { id: req.params.id } }).then(function(dbposts) {
      res.json(dbposts);
    });
  });
};
