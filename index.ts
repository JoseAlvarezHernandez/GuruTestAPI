import Server from './src/server'
require('dotenv').config()

const server = new Server()

server.start()
