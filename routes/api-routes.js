module.exports = function(app, passport, User){
    passport.serializeUser( (user, done) => {
        done(null, user.profileId);
    });
<<<<<<< HEAD
    passport.use(new LocalStrategy(
        {usernameField:"email", passwordField:"password"},
        function(email, password, done) {
            // db.User.findOne({ 
            User.findOne({
                
                    email: email
                
            })
            .then( user => {
                // can't find email case
                if(user == null){
                    return done(null, false);
                }
                // password doesn't match
                else if(user.password !== password){
                    return done(null, false);
                }
                // finds the email and password matches
                else{
                    return done(null, user);
                }
            })
            .catch( err => {
                if (err) { return done(err); }
            });
            function (err, user) {
                
                if (!user) { return done(null, false); }
                if (!user.verifyPassword(password)) { return done(null, false); }
                return done(null, user);
            });
        }
    // passport.use(new GoogleStrategy({
    //     clientID: "39321154145-ccaio8chpd22mkoccld4fg0gm4i0op0d.apps.googleusercontent.com",
    //     clientSecret: "hiqYSXqlprZJFcGm98zfonNq",
    //     callbackURL: "http://www.example.com/auth/google/callback"
    //   },
    //   function(accessToken, refreshToken, profile, done) {
    //        User.findOne({ googleId: profile.id }, function (err, user) {
    //            console.log(profile.id);
    //          return done(err, user);
    //        });
    //   }
    
    ));
 

    
=======
>>>>>>> 783b4b6a6ecb54fe1611dce67cb09d01cf4136a8

    passport.deserializeUser( (profileId, done) => {
        User.findOne({
            profileId: profileId
          })
          .then( user => {
              console.log(user);
              done(null, user);
          })
          .catch( err => {
              done(error, false);
          })
    });
    app.get('/api/email', (req, res) => {
        console.log(req.user);
        if(req.isAuthenticated()){
            res.json({
                user: req.user
            });
        }
        else{
            res.json({
                error: "You are not logged in"
            })
        }
    });

<<<<<<< HEAD
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
        
=======
    app.get('/logout', function(req, res) {
        console.log("logged out!");
        req.logout();
        //redirect to home page
        // res.redirect('/');
        res.redirect('/api/email')
>>>>>>> 783b4b6a6ecb54fe1611dce67cb09d01cf4136a8
    });
    
    app.get('/auth/google',
        passport.authenticate('google', { scope: ['profile', 'email'] }));

<<<<<<< HEAD
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
                error: "error"
            });
        });
        
        
    });
=======
    app.get('/auth/google/callback', 
        passport.authenticate('google', { failureRedirect: 'http://localhost:3000/' }),
        function(req, res) {
            // Successful authentication, redirect home.
            res.redirect('http://localhost:3000/');
    });



    // app.post('/api/email', (req, res) => {
       
    //     if(req.isAuthenticated()){
    //         User.findOne({
    //             profileId: profileId
    //           })
    //           .then( user => {
    //             if(!user){
    //               User.create({
    //                  profileId: profileId,
    //                  name: name,
    //                  profilePic: profilePic,
    //                  email: email
    //                  }).then( user => {
    //                    //create user if not exists
    //                    return cb(null, user);
    //                  });
    //             }
    //             //return user if exists
    //             else{
    //               console.log("maybe this'll push");
    //               User.findOneAndUpdate({profileId: profileId }, { $push: { pages: "https://vignette.wikia.nocookie.net/starwars/images/2/2e/Porg.png/revision/latest?cb=20171216234506" }}, { new: true });
    //             //   User.pages.push("https://vignette.wikia.nocookie.net/starwars/images/2/2e/Porg.png/revision/latest?cb=20171216234506")
    //               return cb(null, user);
    //             }
    //           }).catch( err => {
    //             console.log(err);
    //             return cb(err, null);
    //           })
    //     }
    //     else{
    //         res.json({
    //             error: "You are not logged in"
    //         })
    //     }
    // });
}
>>>>>>> 783b4b6a6ecb54fe1611dce67cb09d01cf4136a8
