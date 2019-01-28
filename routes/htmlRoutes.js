var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  // Load user profile page
  app.get("/home/view-profile/:username", function(req, res) {
    db.user
      .findOne({ where: { username: req.params.username } })
      .then(function(dbUser) {
        res.render("profile", {
          user: dbUser
        });
      });
  });

  // Load create post page
  app.get("/home/new-post", function(req, res) {
    res.render("post", {
      examples: dbExamples
    });
  });

  // Load example page and pass in an example by id
  // app.get("/example/:id", function(req, res) {
  //   db.Example.findOne({ where: { id: req.params.id } }).then(function() {
  //     dbExample;
  //     res.render("example", {
  //       example: dbExample
  //     });
  //   });
  // });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
