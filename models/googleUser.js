var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var GoogleSchema = new Schema({

  googleID: {
    type: String,
    // required: true,
  },
  // `date` must be of type Date. The default value is the current date
  email: {
    type: String,
    // required: true,
    
  },
  firstName: String,
  lastName: String, 
  profileImg: String
  
});

// This creates our model from the above schema, using mongoose's model method
var googleUser = mongoose.model("googleUser", GoogleSchema);

// Export the User model
module.exports = googleUser;


