const { mongoose } = require("../config/dataBase");


let studentData = {
    name: String,
    surname:String
}
const Student = mongoose.model('Student',studentData );

module.exports ={Student}