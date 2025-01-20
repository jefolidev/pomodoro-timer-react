import type { FastifyInstance } from 'fastify'
import { knexDb } from '../database'
import {
  insertSessionInDataBase,
  newSessionBodySchema,
} from '../functions/sessions/insert-session-in-database'

export async function sessionsRoutes(app: FastifyInstance) {
  app.get('/', async () => {
    const sessions = await knexDb('sessions').select()

    return { sessions }
  })

  app.post('/', async (req, reply) => {
    const sessionData = newSessionBodySchema.parse(req.body)

    await insertSessionInDataBase(sessionData)

    return reply.code(201).send()
  })
}
