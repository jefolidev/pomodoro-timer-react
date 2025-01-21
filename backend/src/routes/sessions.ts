import type { FastifyInstance } from 'fastify'

import { z } from 'zod'
import { deleteSession } from '../functions/sessions/delete-session'
import { getSessions } from '../functions/sessions/get-sessions'
import {
  createSession,
  newSessionBodySchema,
} from '../functions/sessions/insert-session'
import { pauseSession } from '../functions/sessions/pause-session'
import { resumeSession } from '../functions/sessions/resume-session'
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

  app.delete('/:id', async (req, reply) => {
    const deleteSessionSchema = z.object({
      id: z.string().uuid(),
    })

    const sessionToDelete = deleteSessionSchema.parse(req.params)

    await deleteSession(sessionToDelete)
    return reply.code(204).send()
  })

  app.patch('/pause/:id', async (req, reply) => {
    const sessionToPauseSchema = z.object({
      id: z.string().uuid(),
    })

    const sessionToPause = sessionToPauseSchema.parse(req.params)

    await pauseSession(sessionToPause)

    return reply.code(204).send()
  })
  app.patch('/resume/:id', async (req, reply) => {
    const sessionToResumeSchema = z.object({
      id: z.string().uuid(),
    })

    const sessionToResume = sessionToResumeSchema.parse(req.params)

    await resumeSession(sessionToResume)

    return reply.code(204).send()
  })
}
