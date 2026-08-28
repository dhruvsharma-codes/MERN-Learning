const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema(
    {
        fullName:{
            type:String,
            required:true,
            trim:true
        },
        email:{
            type:String,
            required:true,
            unique:true,
            trim:true
        },
        bio:{
            type:String,
            required:true,
            trim:true
        },
        profileImage:{
            type:String
        },
        user:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"users",
            required:true
        }
    },
    {
        timestamps:true
    }
);
const userprofile = mongoose.model("userprofile",profileSchema);
module.exports = userprofile;