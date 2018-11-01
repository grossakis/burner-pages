module.exports = function(app, passport, User) {
  passport.serializeUser((user, done) => {
    done(null, user.profileId);
  });

  passport.deserializeUser((profileId, done) => {
    User.findOne({
      profileId: profileId
    })
      .then(user => {
        console.log(user);
        done(null, user);
      })
      .catch(err => {
        done(error, false);
      });
  });
  app.get("/api/email", (req, res) => {
    console.log(req.user);
    if (req.isAuthenticated()) {
      res.json({
        user: req.user
      });
    } else {
      res.json({
        error: "You are not logged in"
      });
    }
  });

  app.get("/logout", function(req, res) {
    console.log("logged out!");
    req.logout();
    //redirect to home page
    // res.redirect('/');
    res.redirect("/api/email");
  });

  app.get(
    "/auth/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
  );

  app.get(
    "/auth/google/callback",
    passport.authenticate("google", {
      failureRedirect: process.env.FAILURE_URL
    }),
    function(req, res) {
      // Successful authentication, redirect home.
      res.redirect(process.env.SUCCESSFUL_URL);
    }
  );

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
};
