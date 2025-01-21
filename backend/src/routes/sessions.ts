import type { FastifyInstance } from 'fastify'

import { z } from 'zod'
import { getSessions } from '../functions/sessions/get-sessions'
import {
  createSession,
  newSessionBodySchema,
} from '../functions/sessions/insert-session'
import {
  updateSession,
  updateSessionSchema,
} from '../functions/sessions/update-session'

export async function sessionsRoutes(app: FastifyInstance) {
  app.get('/', async () => {
    const sessions = await getSessions()

    return { sessions }
  })

  app.post('/', async (req, reply) => {
    try {
      const sessionData = newSessionBodySchema.parse(req.body)

      await createSession(sessionData)

      return reply.code(201).send()
    } catch (error) {
      console.error(error)
      return reply.code(500).send(error)
    }
  })

  app.put('/:id', async (req, reply) => {
    const getSessionParamsSchema = z.object({
      id: z.string().uuid(),
    })

    const { id } = getSessionParamsSchema.parse(req.params)
    const {
      long_break_time,
      short_break_time,
      amount_session_minutes,
      sessions_until_long_break,
    } = updateSessionSchema.parse(req.body)

    await updateSession(id, {
      long_break_time,
      short_break_time,
      amount_session_minutes,
      sessions_until_long_break,
    })

    return reply.code(201).send('Session updated!')
  })
}
