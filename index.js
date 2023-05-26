//1.importing
const express = require('express');
const {model} = require('mongoose');
const studentModel = require('./Model/studentdb')
const cors = require('cors')


//2.initialize
const app = new express();

//middleware
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());

//3.Api create
//post data
app.post('/create',(req,res)=>{
    console.log(req.body)
    var result = new studentModel(req.body);
    result.save();
    res.send("Data Added")
})


//to view data
app.get("/see",async(req,res)=>{
var data = await studentModel.find();
res.json(data);
})


//to delete data
app.delete('/delete/:id',async(req,res)=>{
    let id = req.params.id;
    await studentModel.findByIdAndDelete(id);
    res.send("deleted")
})


//update
app.put('/update/:id',async(req,res)=>{
    let id = req.params.id;
    await studentModel.findByIdAndUpdate(id,req.body);
    res.send("Data Updated")
})


//app.get(url,callback)
app.get('/view',(req,res)=>{
    res.json({"name":"Austle","age":12})
})

//port
app.listen(8080,()=> {
    console.log("port 8080 is active")
})