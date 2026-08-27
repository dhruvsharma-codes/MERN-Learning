const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
            trim:true,
        },
        description:{
            type:String,
            required:true
        },
        user:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"user",
            required:true
        }
    },
    {
        timestamps:true
    },
);
const post = mongoose.model("post",postSchema);
module.exports = post;