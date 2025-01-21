import { z } from 'zod'
import { knexDb } from '../../database'

const sessionToPauseSchema = z.object({
  id: z.string().uuid(),
})

type SessionToPause = z.infer<typeof sessionToPauseSchema>

export async function pauseSession({ id }: SessionToPause) {
  const sessionToBePaused = knexDb('sessions').where({ id })

  const isPaused = (await sessionToBePaused).some((t) => {
    return t.status === 'pending'
  })

  if (isPaused) {
    console.error('Essa sessão já está pausada!')
    throw new Error('Essa sessão já está pausada!')
  }

  return await sessionToBePaused.update({
    status: 'pending',
    pending_since: new Date().toISOString(),
  })
}
