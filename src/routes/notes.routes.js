const  { Router } = require('express')

const NotesController = require('../Controllers/NotesController')

const notesRouter = Router()

const notesController = new NotesController();

notesRouter.post('/:user_id', notesController.create)
notesRouter.get('/', notesController.index)
notesRouter.get('/:id', notesController.show)
notesRouter.delete('/:id', notesController.delete)

module.exports = notesRouter