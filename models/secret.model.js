const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const secretSchema=new Schema({
    secret:{ type:String,required:true},
    description:{type:String,required:true}
    });
const Secret=new mongoose.model("Secret",secretSchema);
module.exports=Secret;