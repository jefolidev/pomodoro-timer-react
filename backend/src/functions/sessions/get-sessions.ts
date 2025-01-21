import { knexDb } from '../../database'

export async function getSessions() {
  return await knexDb('sessions').select()
}
