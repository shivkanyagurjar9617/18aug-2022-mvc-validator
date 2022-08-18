const express = require('express')
const { adminController } = require('../../controllers/admin/adminController')
const { stdValidator } = require('../../validators/stdValidator')
const adminRoute = express.Router()

adminRoute.get('/student',stdValidator,adminController)

module.exports ={adminRoute}