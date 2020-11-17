require('dotenv').config()
const server = require('./auth/api/server')

const PORT = process.env.PORT || 5000
const SECRET = process.env.SECRET

server.listen(PORT, () =>{ console.log(`\n***** server is running on port ${PORT} ***** \n` .america)})