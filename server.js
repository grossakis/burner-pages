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
const User = require("./models/User");
const Page = require("./models/Page");
const db = require("./models");
// const passportGoogleAuth = require('passport-google-oauth20');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

//remember that this is your connection string.
//we will change this later
if(typeof process.env.MONGODB_URI !== 'undefined' && process.env.MONGODB_URI.length > 0){
  mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });
}
else{
  mongoose.connect("mongodb://localhost/testmern3", { useNewUrlParser: true });
}
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressSession({ 
  secret: '12346 xyz i dont know it could be anything tomato',
  resave: true, 
  saveUninitialized: true,
  secure: false 
}));
app.use(passport.initialize());
app.use(passport.session());

console.log(
  {
    functionName: "passport use inputs in server.js",
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
  }
);
passport.use(new GoogleStrategy({
  clientID: '39321154145-ccaio8chpd22mkoccld4fg0gm4i0op0d.apps.googleusercontent.com',
  clientSecret: 'hiqYSXqlprZJFcGm98zfonNq',
  callbackURL: "http://localhost:3001/auth/google/callback"
},
function(accessToken, refreshToken, data, cb) {
  console.log(data.emails[0].value);
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
  .then( user => {
    if(!user){
      User.create({
         profileId: profileId,
         name: name,
         profilePic: profilePic,
         email: email
         }).then( user => {
           //create user if not exists
           return cb(null, user);
         });
    }
    //return user if exists
    else{
      return cb(null, user);
    }
  }).catch( err => {
    console.log(err);
    return cb(err, null);
  })
  // User.create({
  //   profileId: profileId,
  //   email: email
  // }).then( user => {
  //   return cb(null, user);
  // }).catch( err => {
  //   console.log(err);
  //   return cb(err, null);
  // });
}
));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
app.get("/michigan", (req, res) => {
  res.json({
    test: "uh Kristine"
  });
});

app.get("/testdb", (req, res) => {

  User.create({
    profileId: "1",
    email: "test@c.com"
  }).then( data => {
    console.log(data);
    res.json(data);
  });

});
//change to post later
app.get('/submitsomething', (req, res) => {
  console.log(req.user);
  if(req.isAuthenticated()){
    let user = req.user;
    console.log(user);
    
    let id = user.profileId;
    // let testData = req.body;
    let testData = {
      author: "https://vignette.wikia.nocookie.net/starwars/images/2/2e/Porg.png/revision/latest?cb=20171216234506"
    }
    Page.create(testData)
    .then(function(dbPages) {
      console.log({
        routerSubfunction: "create page",
        dbPages: dbPages,
        profileId: id
      });

      User.findOne({profileId: id})
      .then( user => {
        console.log({
          routerSubfunction: "create page findOne",
          dbPages: dbPages,
          profileId: id,
          user: user
        });
      });
      // If a Book was created successfully, find one library (there's only one) and push the new Book's _id to the Library's `books` array
      // { new: true } tells the query that we want it to return the updated Library -- it returns the original by default
      // Since our mongoose query returns a promise, we can chain another `.then` which receives the result of the query
      User.findOneAndUpdate({profileId: id}, { $push: { pages: dbPages._id} }, { new: true })
      .then(user => {
        console.log({
          routerSubfunction: "create page findOneAndUpdate",
          dbPages: dbPages,
          profileId: id,
          user: user
        });
      })
      ;
    })
    .then(function(User) {
      // If the Library was updated successfully, send it back to the client
      res.json(User);
    })
    .catch(function(err) {
      // If an error occurs, send it back to the client
      res.json(err);
    });


  }
  else{
      res.json({
          error: "You are not logged in"
      })
  }
});

// db.User.create({ name: "Butts" })
//   .then(function(User) {
//     // If saved successfully, print the new Library document to the console
//     console.log(User);
//   })
//   .catch(function(err) {
//     // If an error occurs, print it to the console
//     console.log(err.message);
//   });

// Routes

// POST route for saving a new Book to the db and associating it with a Library
// app.post("/submit", function(req, res) {
//   // Create a new Book in the database
//   Page.create(req.body)
//     .then(function(dbPages) {
//       // If a Book was created successfully, find one library (there's only one) and push the new Book's _id to the Library's `books` array
//       // { new: true } tells the query that we want it to return the updated Library -- it returns the original by default
//       // Since our mongoose query returns a promise, we can chain another `.then` which receives the result of the query
//       return User.findOneAndUpdate({}, { $push: { pages: "hmm"} }, { new: true });
//     })
//     .then(function(User) {
//       // If the Library was updated successfully, send it back to the client
//       res.json(User);
//     })
//     .catch(function(err) {
//       // If an error occurs, send it back to the client
//       res.json(err);
//     });
// });

require('./routes/api-routes')(app, passport, User);

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});



app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});