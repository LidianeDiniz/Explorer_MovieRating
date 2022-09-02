const  { Router } = require('express')

const UsersController = require('../Controllers/UsersController')

const usersRouter = Router()


function myMiddleware(request, response, next){
    console.log('Inside the middleware')

    next()
}

const userController = new UsersController();

usersRouter.use(myMiddleware);
usersRouter.post('/', userController.create)

module.exports = usersRouter