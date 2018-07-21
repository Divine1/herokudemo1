const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

app.get("/app",(req,res)=>{
    console.log("in app()");
    res.send({"res" : "from app"});
}); 

app.listen(port,()=>{
    console.log("server started at ",port);
});