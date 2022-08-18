const express = require('express');
const { adminRoute } = require('./routes/admin/adminRoute');
const app = express();
require('dotenv').config()


app.use('/mvc',adminRoute)

let port = process.env.PORT
app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})