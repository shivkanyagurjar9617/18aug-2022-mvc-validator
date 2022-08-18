const { check } = require("express-validator")

let stdValidator = [
    check('name','name is required').notEmpty(),
    check('surname','surname is required').notEmpty(),
]

module.exports ={stdValidator}