var db = require("../models");

module.exports = function(app) {
  // Get all posts
  app.get("/api/posts", function(req, res) {
    db.posts.findAll({}).then(function(dbposts) {
      res.json(dbposts);
    });
  });

  // Create a new post
  app.post("/api/posts", function(req, res) {
    db.posts.create(req.body).then(function(dbposts) {
      res.json(dbposts);
    });
  });

  // Get posts by tag - order by last created
  app.get("/api/posts", function(req, res) {
    db.posts.findAll({}).then(function(dbposts) {
      res.json(dbposts);
    });
  });

  // Delete a post by id
  // app.delete("/api/posts/:id", function(req, res) {
  //   db.posts.destroy({ where: { id: req.params.id } }).then(function(dbposts) {
  //     res.json(dbposts);
  //   });
  // });
};
