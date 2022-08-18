

const {mongoose} = require('mongoose');
require('dotenv').config()

mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.x2agz.mongodb.net/?retryWrites=true&w=majority`)
.then((d)=>console.log('connected'))
.catch((e)=>console.log('this error'))

module.exports ={mongoose}