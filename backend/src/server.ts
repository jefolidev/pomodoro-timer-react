import fastify from 'fastify'
import { env } from '../env'
import { sessionsRoutes } from './routes/sessions'

const app = fastify()

app.register(sessionsRoutes, {
  prefix: 'sessions',
})

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('Server is running on port 3333!')
  })
