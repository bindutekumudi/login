const express=require("express");
const cors=require("cors");
const mongoose=require("mongoose");
require("dotenv").config();
const app=express();
const port=process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
const uri=process.env.ATLAS_URI;
mongoose.connect(uri,{useNewUrlParser:true,useCreateIndex:true});
const connection=mongoose.connection;
connection.once("open",()=>{
    console.log("mongodb connection successfully established");
})
const usersRouter = require("./routes/users");
// const submittedSecret=require("./routes/secrets");
// app.use("/secrets",secretsRouter);
app.use("/users",usersRouter);
app.listen(port,()=>{
    console.log("Server started on port : 5000");
});