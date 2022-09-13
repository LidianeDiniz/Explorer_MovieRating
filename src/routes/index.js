const  { Router } = require('express')

const userRouter = require('./user.routes')
const notesRouter = require('./notes.routes')
const tagRouter = require('./tags.routes')

const routes = Router()

routes.use('/users', userRouter)
routes.use('/notes', notesRouter)
routes.use('/tags', tagRouter)

module.exports = routes
