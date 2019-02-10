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
    db.Posts.create({
      PostTitle: req.body.title,
      PostDescription: req.body.desc,
      CategoryId: req.body.categoryid,
      UserId: req.body.userid
    }).then(function(dbPosts) {
      res.json(dbPosts);
    });
  });

  // Edit a post
  app.put("/api/Posts", function(req, res) {
    db.Posts.update({ where: { id: req.params.id } }).then(function(dbPosts) {
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
