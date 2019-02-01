var db = require("../models");

module.exports = (app, passport) => {
  // app.get("/", (req, res) => {
  //   res.render("index");
  // });

  app.get("/signup", (req, res) => {
    res.render("signup");
  });

  app.get("/signin", (req, res) => {
    res.render("signin");
  });

  app.post(
    "/signup",
    passport.authenticate("local-signup", {
      successRedirect: "/home",
      failureRedirect: "/signup"
    })
  );

  app.get("/home", isLoggedIn, (req, res) => {
    res.render("home");
  });

  app.get("/logout", (req, res) => {
    req.session.destroy(err => {
      res.redirect("/");
    });
  });

  app.post(
    "/signin",
    passport.authenticate("local-signin", {
      successRedirect: "/home",
      failureRedirect: "/signin"
    })
  );

  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect("/signin");
  }

  // Load index page
  app.get("/", function(req, res) {
    db.posts.findAll({}).then(function(dbposts) {
      res.render("index", {
        msg: "Welcome!",
        posts: dbposts
      });
    });
  });

  // Load create post page
  app.get("/new-post", (req, res) => {
    res.render("post");
  });

  // Load user profile page
  app.get("/view-profile/:username", function(req, res) {
    db.user
      .findOne({ where: { username: req.params.username } })
      .then(function(dbUser) {
        res.render("profile", {
          user: dbUser
        });
      });
  });

  // Load example page and pass in an example by id
  // app.get("/example/:id", function(req, res) {
  //   db.Posts.findOne({ where: { id: req.params.id } }).then(function() {
  //     dbPosts;
  //     res.render("example", {
  //       posts: dbPosts
  //     });
  //   });
  // });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
