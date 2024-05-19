import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

   id:{
    type:String,
    required:true,
   },

   message:{
    type:String,
    required:true,
   },

   name:{
    type:String,
    required:true,
   }

},{timestamps:true}) ;

export default User  =  mongoose.model("User",userSchema);

