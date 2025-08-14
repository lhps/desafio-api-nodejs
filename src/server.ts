import { server } from './app.ts'

server.listen({port: 3333}).then(() => {
    console.log('HTTP Server is running on port 3333')
})