const mongoose = require("mongoose");
// require('mongoose-type-email');
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    email:{
      type:String,
      unique:true,
      trim:true,
      required: true,
      match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    },
    password:{
      type:String,
      trim:true,
      require: true,
      minLength: 5
      // required:true
    },
    date:{
      type:Date,
      default:Date.now
    },
    favorites:{
      type:Array
    }
  }
)

const User = mongoose.model("User",userSchema);

module.exports = User;