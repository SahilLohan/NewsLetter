const express = require("express");
const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.static('public'))
const http=require("http");

app.get("/",function(req,res){
    res.sendFile(__dirname+"/signup.html");
})

app.post("/" , function(req,res){
    console.log(req.body.FirstName,req.body.LastName,req.body.EmailId);
    // connect to mail chimp api

    // Api Key : 69051695c568b81b634b90748c859527-us14

})



app.listen(3000,function(){
    console.log("App started listening 3000 port");
})