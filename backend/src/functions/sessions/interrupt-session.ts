import { z } from 'zod'
import { knexDb } from '../../database'

const sessionToInterruptSchema = z.object({
  id: z.string().uuid(),
})

type SessioToInterrupt = z.infer<typeof sessionToInterruptSchema>

export async function interruptSession({ id }: SessioToInterrupt) {
  try {
    const sessionToInterrupt = knexDb('sessions').where({ id })

    return await sessionToInterrupt.update({
      status: 'interrupted',
    })
  } catch (err) {
    console.error(err)
    throw new Error('Something has ocurred: ' + err)
  }
}
