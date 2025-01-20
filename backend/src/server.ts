import fastify from 'fastify'
import { sessionsRoutes } from './routes/sessions'

const app = fastify()

app.register(sessionsRoutes, {
  prefix: 'session',
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('Server is running on port 3333!')
  })
