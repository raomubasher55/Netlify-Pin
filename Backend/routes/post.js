const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  user:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "users"
  },
  title: String,
  description: String,
  image: String,
  datecreated: {type: Date , default:Date.now()},
});


module.exports = mongoose.model('post', postSchema);
