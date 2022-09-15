const  { Router } = require('express')

const ensureAuthentication = require('../middleware/ensureAuthentication')

const UsersController = require('../Controllers/UsersController')

const usersRouter = Router()

const userController = new UsersController();

usersRouter.post('/', userController.create)
usersRouter.put('/', ensureAuthentication, userController.update)

module.exports = usersRouter