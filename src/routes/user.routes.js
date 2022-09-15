const  { Router } = require('express')

const multer = require('multer')
const uploadConfig = require('../config/upload')
const upload = multer(uploadConfig.MULTER)

const ensureAuthentication = require('../middleware/ensureAuthentication')

const UsersController = require('../Controllers/UsersController')

const usersRouter = Router()

const userController = new UsersController();

usersRouter.post('/', userController.create)
usersRouter.put('/', ensureAuthentication, userController.update)
usersRouter.patch('/avatar', ensureAuthentication, upload.single('avatar'), (request, response) => {
    console.log(request.file.filename)
    response.json()
} )

module.exports = usersRouter