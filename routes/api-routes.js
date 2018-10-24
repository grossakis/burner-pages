// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our User model
var User = require("../models/user");

var LocalStrategy = require("passport-local").Strategy;
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

// Routes
// =============================================================
module.exports = function(app, passport, mongoose) {
    // Define our storage for user data in passport
    passport.serializeUser(function(user, done) {
        done(null, user.email);
    });
    
    passport.deserializeUser(function(email, done) {
        User.findOne({ email: email })
        .then(function (user) {
            done(null, user);
        })
        .catch(error => {
            console.log(error);
            done(error, false);
        })
        ;
    });
    // passport.use(new LocalStrategy(
    //     {usernameField:"email", passwordField:"password"},
    //     function(email, password, done) {
    //         // db.User.findOne({ 
    //         User.findOne({
                
    //                 email: email
                
    //         })
    //         .then( user => {
    //             // can't find email case
    //             if(user == null){
    //                 return done(null, false);
    //             }
    //             // password doesn't match
    //             else if(user.password !== password){
    //                 return done(null, false);
    //             }
    //             // finds the email and password matches
    //             else{
    //                 return done(null, user);
    //             }
    //         })
    //         .catch( err => {
    //             if (err) { return done(err); }
    //         });
    //         // function (err, user) {
                
    //         //     if (!user) { return done(null, false); }
    //         //     if (!user.verifyPassword(password)) { return done(null, false); }
    //         //     return done(null, user);
    //         // });
    //     }
    passport.use(new GoogleStrategy({
        clientID: "39321154145-ccaio8chpd22mkoccld4fg0gm4i0op0d.apps.googleusercontent.com",
        clientSecret: "hiqYSXqlprZJFcGm98zfonNq",
        callbackURL: "http://www.example.com/auth/google/callback"
      },
      function(accessToken, refreshToken, profile, done) {
           User.findOne({ googleId: profile.id }, function (err, user) {
               console.log(profile.id);
             return done(err, user);
           });
      }
    
    ));
 

    ));

    // log in route
    app.post('/api/login', 
        passport.authenticate('local', { /* failureRedirect: '/login' */ }),
        function(req, res) {
            // ?? email
            console.log("test");
            console.log(req.user)
            console.log(req.isAuthenticated());
            if(req.isAuthenticated()){
                res.json({
                    email: req.user.email
                });
            }
            else{
                res.json({
                    error: "error at login"
                })
            }
        }
    );

    app.get("/api/email", (req, res) => {
        console.log(req.user);
        if(req.isAuthenticated()){
            console.log(req.user);
            res.json({
                email: req.user.email
            });
        }
        else{
            res.json({
                error: "you are not logged in"
            }); 
        }
    });

    app.get("/testdb", (req, res) => {
         User.find({})
        .then( dbUsers => {
            // We have access to the todos as an argument inside of the callback function
            res.json(dbUsers);
        })
        .catch( error => {
            res.json({
                error: "Error getting users"
            });
            console.log(error);
        });
        ;
    });

    app.get("/testdb1", (req, res) => {
        User.findOne({
           
                email: "uniquename@csc.com"
            
        })
        .then( dbUsers => {
            // We have access to the todos as an argument inside of the callback function
            res.json(dbUsers);
        })
        .catch( error => {
            res.json({
                error: "Error getting users"
            });
            console.log(error);
        });
        ;
    });
    app.post("/api/user", (req, res) => {
        console.log(req.body);
        User.create({
            email: req.body.email,
            password: req.body.password
        })
        .then( results => {
            res.json(results);
        })
        .catch( error => {
            res.json({
                error: "wtf man you messed this example up... no donuts for you!"
            });
        });
        ;
        
    });
};