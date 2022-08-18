const { validationResult } = require("express-validator");
const { Student } = require("../../models/studentModel");



const adminController = (req,res)=>{

    let errors = validationResult(req)
     if(errors.isEmpty()){
        
        const stdObj = new Student({ name: req.query.name,surname:req.query.surname });
        stdObj.save().then((d) => console.log('data insert successfiully'))
        .catch((e)=>console.log('error',e))
        res.status(200).json({message:'data insert successfiully'})

    }else{
        res.status(404).json({message:'validatin error'})
            
    } 

}
exports.adminController = adminController