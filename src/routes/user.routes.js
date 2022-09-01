const  { Router } = require('express')

const usersRouter = Router()

usersRouter.post('/', (request, response) => {
    const { name, email, password } = request.body

    response.send(`
    -Username: ${name}
    -Email: ${email} 
    -Password: ${password}
    `)
})

module.exports = usersRouter