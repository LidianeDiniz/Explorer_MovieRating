const  { Router } = require('express')

const TagController = require('../Controllers/TagController')

const tagRouter = Router()

const tagController = new TagController();

tagRouter.get('/:user_id', tagController.index)

module.exports = tagRouter