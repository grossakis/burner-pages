const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const expressSession = require("express-session");
const passport = require("passport");
const PORT = process.env.PORT || 3001;
const app = express();
// const mongoose = require("mongoose");
// const Example = require("./exampleModel.js");

//remember that this is your connection string.
//we will change this later
// if(typeof process.env.MONGODB_URI !== 'undefined' && process.env.MONGODB_URI.length > 0){
//   mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });
// }
// else{
//   mongoose.connect("mongodb://localhost/testmern", { useNewUrlParser: true });
// }
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressSession({ 
  secret: 'keyboard cat',
  resave: true, 
  saveUninitialized: true,
  secure: false 
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());
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

require("./routes/api-routes.js")(app, passport);

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
