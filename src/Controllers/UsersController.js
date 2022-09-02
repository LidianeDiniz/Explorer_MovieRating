const AppError = require('../utils/AppError')

class UsersController {
    create(request, response) {
        const { name, email, password } = request.body

        if(!name) {
            throw new AppError('please input a name')
        }

        response.status(201).json({name, email, password})
    }
}

module.exports = UsersController;