const pusher = require('../pusher')


const send = async (req, res) => {
     await pusher.trigger("chat", "message", {
          username: req.body.username,
          message: req.body.message
     });

     res.json([])
}

module.exports = { send }