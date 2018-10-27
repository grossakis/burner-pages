// Require mongoose
var mongoose = require("mongoose");

// Get a reference to the mongoose Schema constructor
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    profileId: {
        type: String
    },
    name: {

    },
    profilePic: {
        type: String
    },
    email: {
        type: String
    },
    pages: [{
        type: String
    }]
});

var User = mongoose.model("User", UserSchema);

// Export the Example model
module.exports = User;