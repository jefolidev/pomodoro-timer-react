import { z } from 'zod'
import { knexDb } from '../../database'

const sessionToResumeSchema = z.object({
  id: z.string().uuid(),
})

type SessionToResume = z.infer<typeof sessionToResumeSchema>

export async function resumeSession({ id }: SessionToResume) {
  const sessionToBeResumed = knexDb('sessions').where({ id })

  const isResumed = (await sessionToBeResumed).some((t) => {
    return t.status === 'in_progress'
  })

  if (isResumed) {
    console.error('Essa sessão já está em andamento!')
    throw new Error('Essa sessão já está em andamento!')
  }

  return await sessionToBeResumed.update({
    status: 'in_progress',
    pending_since: null,
  })
}
