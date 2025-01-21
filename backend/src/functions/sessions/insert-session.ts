import { z } from 'zod'
import { knexDb } from '../../database'

export const newSessionBodySchema = z.object({
  name: z.string(),
  status: z.enum(['pending', 'in_progress', 'completed']).default('pending'),
  sessions_until_long_break: z.number().default(4),
  amount_session_minutes: z.number(),
  amount_session_breaks: z.number(),
})

type SessionData = z.infer<typeof newSessionBodySchema>

export async function createSession(data: SessionData) {
  const longBreakFactor = 2

  const totalBreaks = data.amount_session_minutes * 0.2
  const shortBreaks = data.amount_session_breaks - 1

  const eachBreak = totalBreaks / (shortBreaks + longBreakFactor)
  const longBreak = eachBreak * longBreakFactor

  return await knexDb('sessions').insert({
    ...data,
    id: crypto.randomUUID(),
    short_break_time: data.amount_session_breaks < 2 ? 0 : eachBreak / 2,
    long_break_time: data.amount_session_breaks < 2 ? longBreak / 2 : longBreak,
  })
}
