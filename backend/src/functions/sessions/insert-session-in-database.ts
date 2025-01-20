import { z } from 'zod'
import { knexDb } from '../../database'

export const newSessionBodySchema = z.object({
  name: z.string(),
  status: z.enum(['pending', 'in_progress', 'completed']).default('pending'),
  short_break_time: z.number().default(60 * 5), // 5 minutos
  long_break_time: z.number().default(60 * 15), // 15 minutos
  sessions_until_long_break: z.number().default(4),
  amount_session_minutes: z.number(),
  amount_session_breaks: z.number(),
})

type SessionData = z.infer<typeof newSessionBodySchema>

export async function insertSessionInDataBase(data: SessionData) {
  return await knexDb('sessions').insert({ id: crypto.randomUUID(), ...data })
}
