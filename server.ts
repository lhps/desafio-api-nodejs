import fastify from 'fastify'
import crypto from 'node:crypto'

const server = fastify({ logger: {
    transport: {
        target: 'pino-pretty',
    }
}})

const courses = [
    {id: '1', title: 'Curso 1'},
    {id: '2', title: 'Curso 2'},
    {id: '3', title: 'Curso 3'}
]


server.get('/courses', () => {
    return { courses}
})

server.get('/courses/:id', (request, reply) => {
    type Params = {
        id: string
    }

    const params = request.params as Params
    const courseId = params.id

    const course = courses.find(course => course.id === courseId)

    if (!course) {
        return reply.status(404).send({
            message: 'Course not found'
        })
    }

    return { course }
})

server.post('/courses', (request, reply) => {
    type Body = {
        title: string
    }

    const courseId = crypto.randomUUID()

    const body = request.body as Body
    const courseTitle = body.title

    if (!courseTitle) {
        return reply.status(400).send({
            message: 'Course title is required'
        })
    }

    courses.push({ id: courseId, title: courseTitle})

    return reply.status(201).send({
        courseId
    })
})

server.listen({port: 3333}).then(() => {
    console.log('HTTP Server is running on port 3333')
})