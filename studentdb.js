const mongoose =require('mongoose');
mongoose.connect("mongodb+srv://austlejaison555:messi@cluster0.48k1zps.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log("DB connected")
})
.catch(err=>console.log(err));

let Schema = mongoose.Schema;

const studentSchema = new Schema({
    sname:String,
    sgrade:Number
})

var studentModel = mongoose.model("student",studentSchema);
module.exports = studentModel
