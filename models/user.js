const mongoose = require("mongoose");

const linkregex = /https?:\/\/(www\.)?\S+/;

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  about: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  avatar: {
    type: String,
    required: true,
    validate: {
      validator(v) {
        return v.match(linkregex);
      },
      message: "Please enter a valid url",
    },
  },
});

module.exports = mongoose.model("user", userSchema);
