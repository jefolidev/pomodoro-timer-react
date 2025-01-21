import { z } from 'zod'
import { knexDb } from '../../database'

export const updateSessionSchema = z.object({
  short_break_time: z.number().default(60 * 5), // ? 5 minutos
  long_break_time: z.number().default(60 * 15), // ? 15 minutos
  sessions_until_long_break: z.number().default(4),
  amount_session_minutes: z.number(),
})

type SessionData = z.infer<typeof updateSessionSchema>

export async function updateSession(
  id: string,
{
    short_break_time,
    long_break_time,
    sessions_until_long_break,
    amount_session_minutes,
  }: SessionData
) {
  const tableToUpdate = knexDb('sessions').where({ id })

  return await tableToUpdate.update({
    short_break_time,
    long_break_time,
    sessions_until_long_break,
    amount_session_minutes,
  })
}
