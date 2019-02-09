require("dotenv").config();
var express = require("express");
var exphbs = require("express-handlebars");
var passport = require("passport");
var session = require("express-session");

var http = require("http");
var socketIO = require("socket.io");

var db = require("./models");
var seed = require("./seeds");

const { generateMessage } = require("./utils/message");
var app = express();
var PORT = process.env.PORT || 3000;
var server = http.createServer(app);
var io = socketIO(server);

//socket

io.on("connection", socket => {
  console.log("New user Connected");

  // socket.emit("newMessage", generateMessage("Admin", "Welcome to Lit Lab"));

  // socket.broadcast.emit(
  //   "newMessage",
  //   generateMessage("Admin", "New User joined")
  // );

  socket.on("createMessage", (message, callback) => {
    console.log("createMessage", message);
    io.emit("newMessage", generateMessage(message.from, message.text));
    callback("This is from the server");
  });

  socket.on("send doc", function(data) {
    io.emit("update doc", data);
  });

  socket.on("update content", content => {
    // once we get a 'change color' event from one of our clients, we will send it to the rest of the clients
    // we make use of the socket.emit method again with the argument given to use from the callback function above
    console.log("content updates...");
    io.sockets.emit("update content", content);
  });

  socket.on("disconnect", () => {
    console.log("User was disconnected");
  });
});

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

//passport
app.use(
  session({
    secret: "rHUyjs6RmVOD06OdOTsVAyUUCxVXaWci",
    resave: true,
    saveUninitialized: true
  })
); // session secret
app.use(passport.initialize());
app.use(passport.session());

//render a user object - i think?
// passport.serializeUser(function(user, done) {
//   done(null, user.id);
// });
//
// passport.deserializeUser(function(id, done) {
//   User.findById(id, function(err, user) {
//     done(err, user);
//   });
// });

// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// Routes
require("./routes/apiRoutes")(app);
require("./routes/auth.js")(app, passport);
require("./config/passport/passport.js");

// Load passport strategies
require("./config/passport/passport.js")(passport, db.User);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  seed(db);
  server.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;
