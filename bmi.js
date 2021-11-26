const express=require('express');
const bodyParser=require('body-parser');

const app=express();
app.use(bodyParser.urlencoded({extended:true}));

app.get('/',function(request,response){
    response.sendFile(__dirname+"/index.html");
});

app.post('/',function(request,response){
    var weight=Number(request.body.weight);
    var height=Number(request.body.height);
    height=height*height;

    var bmi=weight/height;
    response.send("Your BMI is : "+bmi);
});

app.listen(3000,function(){
    console.log("Server Running at port 3000, use link : http://localhost:3000/");
});