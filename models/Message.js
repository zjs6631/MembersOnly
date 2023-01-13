const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    message: {type: String, require: true},
    authorID: {type: Schema.Types.ObjectId, ref: 'User'},
}, {timestamps: true}, //provides .createdAt and .updatedAt to message obj);
);

module.exports = mongoose.model("Message", MessageSchema);