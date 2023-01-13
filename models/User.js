const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstname: {type: String, require: true},
    lastname: {type: String, require: true},
    username: {type: String, require: true},
    password: {type: String, require: true},
    confirmpassword: {type: String, require: true},
    isMember: {type: Boolean,},
    isAdmin: {type: Boolean,}
});
//virtual to define a users full name
UserSchema.virtual("fullname").get(function(){
    return this.firstname + " " + this.lastname;
});

module.exports = mongoose.model("User", UserSchema);