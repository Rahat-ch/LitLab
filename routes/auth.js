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
    console.log(req.user.username);
    res.render("home", { user: req.user.username });
  });

  app.get("/logout", (req, res) => {
    req.session.destroy(err => {
      res.redirect("/");
      if (err) {
        throw err;
      }
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
    db.Posts.findAll({}).then(function(dbPosts) {
      res.render("signin", {
        msg: "Welcome!",
        Posts: dbPosts
      });
    });
  });

  // Load user profile page
  app.get("/view-profile/:username", isLoggedIn, function(req, res) {
    db.User.findOne({ where: { username: req.params.username } }).then(function(
      dbUser
    ) {
      res.render("profile", {
        user: dbUser
      });
    });
  });

  // Edit post by id
  app.get("/edit-post/:id", function(req, res) {
    db.Posts.findOne({ where: { id: req.params.id } }).then(function(dbPosts) {
      res.render("project", {
        Posts: dbPosts
      });
    });
  });

  // Load home page and pass in a post by id
  app.get("/posts/:id", function(req, res) {
    db.Posts.findOne({ where: { id: req.params.id } }).then(function() {
      dbPosts;
      res.render("example", {
        Posts: dbPosts
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
