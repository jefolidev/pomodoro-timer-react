import { knexDb } from '../../database'

export async function deleteSession({ id }: { id: string }) {
  return await knexDb('sessions').delete().where({ id })
}
