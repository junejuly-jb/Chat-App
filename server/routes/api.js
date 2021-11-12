const api = require('express').Router();
const MessageController = require('../controllers/MessageController')

api.post('/messages', MessageController.send)

module.exports = api