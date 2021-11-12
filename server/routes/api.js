const api = require('express').Router();
const MessageController = require('../controllers/MessageController')

api.post('/message', MessageController.send)

module.exports = api