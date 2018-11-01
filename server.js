const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const expressSession = require("express-session");
const passport = require("passport");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
// const Example = require("./exampleModel.js");
const User = require("./models/user");
const Page = require("./models/page");
const db = require("./models");
const env = require("dotenv").config();

// const passportGoogleAuth = require('passport-google-oauth20');
const GoogleStrategy = require("passport-google-oauth20").Strategy;

//remember that this is your connection string.
//we will change this later
if (
  typeof process.env.MONGODB_URI !== "undefined" &&
  process.env.MONGODB_URI.length > 0
) {
  mongoose.connect(
    process.env.MONGODB_URI,
    { useNewUrlParser: true }
  );
} else {
  mongoose.connect(
    "mongodb://localhost/testmern3",
    { useNewUrlParser: true }
  );
}
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  expressSession({
    secret: "12346 xyz i dont know it could be anything tomato",
    resave: true,
    saveUninitialized: true,
    secure: false
  })
);
app.use(passport.initialize());
app.use(passport.session());

// console.log({
//   functionName: 'passport use inputs in server.js',
//   clientID: process.env.clientID,
//   clientSecret: process.env.clientSecret,
//   callbackURL: process.env.callbackURL
// });
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.clientID,
      clientSecret: process.env.clientSecret,
      callbackURL: process.env.callbackURL
    },
    function(accessToken, refreshToken, data, cb) {
      // console.log(data.emails[0].value);
      var email = data.emails[0].value;
      var profilePic = data.photos[0].value;
      var profileId = data.id;
      var name = data.name.givenName;
      // console.log(data.id);
      // console.log(data.name.givenName)
      // console.log(data.photos[0].value);
      // console.log(data);
      // User.findOrCreate({ googleId: profile.id }, function (err, user) {
      // return cb(err, user);
      // });
      User.findOne({
        profileId: profileId
      })
        .then(user => {
          if (!user) {
            User.create({
              profileId: profileId,
              name: name,
              profilePic: profilePic,
              email: email
            }).then(user => {
              //create user if not exists
              return cb(null, user);
            });
          }
          //return user if exists
          else {
            return cb(null, user);
          }
        })
        .catch(err => {
          // console.log(err);
          return cb(err, null);
        });
    }
  )
);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/public"));
}

// Define API routes here

// app.get("/hostroute", (req, res) => {
//   console.log(mongoose.connection.host);
//   console.log(Page.db.name);
//   console.log(Page.db.host);
// });
app.get("/api/page/:userId/:pageName/:randomNuber", (req, res) => {
  Page.find({
    profileId: req.params.userId,
    "author.name": req.params.pageName
  })
    .then(data => {
      console.log(data);
      console.log(data[0].author[0].rows);
      res.json({
        rows: data[0].author[0].rows,
        backgroundColor: data[0].author[0].backgroundColor
      });
    })
    .catch(err => {
      res.json(err);
    });
  // res.json({ rows: [] });
});

// Route for retrieving all Pages from the user
app.get("/api/email", function(req, res) {
  // Find all Pages
  let user = req.user;
  let id = user.profileId;
  let testData = {
    author: req.body,
    profileId: id
  };
  Page.find({ profileId: id })
    .then(function(dbPage) {
      res.json(dbPage);
    })
    .catch(function(err) {
      res.json(err);
    });
});
//Route for retrieving all Pages in the db
app.get("/api/allPages", function(req, res) {
  // Find all Pages
  Page.find({})
    .then(function(dbPage) {
      res.json(dbPage);
    })
    .catch(function(err) {
      res.json(err);
    });
});

// Route for retrieving all Users from the db
app.get("/api/user", function(req, res) {
  User.find({})
    .then(function(dbUser) {
      res.json(dbUser);
    })
    .catch(function(err) {
      res.json(err);
    });
});

// Route for saving a new Page to the db and associating it with a User
app.post("/submitsomething", function(req, res) {
  if (req.isAuthenticated()) {
    let user = req.user;
    let id = user.profileId;
    let testData = {
      author: req.body,
      profileId: id
    };
    // console.log(JSON.stringify(req.body));
    Page.create(testData)
      .then(function(dbPage) {
        return db.User.findOneAndUpdate(
          {},
          { $push: { pages: dbPage.author } },
          { new: true }
        );
      })
      .then(function(dbUser) {
        res.json(dbUser);
        res.redirect("/api/email");
      })
      .catch(function(err) {
        // If an error occurs, send it back to the client
        res.json(err);
      });
  } else {
    res.json({
      error: "You are not logged in"
    });
  }
});

require("./routes/api-routes")(app, passport, User);

app.get("/populateduser", function(req, res) {
  // Using our User model, "find" every user in our db and populate them with any associated books
  User.find({})
    // Specify that we want to populate the retrieved users with any associated pages
    .populate("pages")
    .then(function(dbUser) {
      // If any Users are found, send them to the client with any associated Pages
      res.json(dbUser);
    })
    .catch(function(err) {
      // If an error occurs, send it back to the client
      res.json(err);
    });
});

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
