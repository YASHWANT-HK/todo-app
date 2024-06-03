const mongoose = require("mongoose");

// data base schema
const todoSchema = mongoose.Schema(
    {
        title: { type: String, required: true },
        desc: String,
    },
    { timestamps: true }
);

//creating mongoose model
const Todo = mongoose.model("todo", todoSchema);


module.exports = Todo