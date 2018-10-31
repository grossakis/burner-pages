// Require mongoose
var mongoose = require('mongoose');

// Get a reference to the mongoose Schema constructor
var Schema = mongoose.Schema;

var PageSchema = new Schema({
  author: {
    type: Array
  },
  profileId: {
    type: String
  }
});

var Page = mongoose.model('Page', PageSchema);

// Export the Example model
module.exports = Page;
