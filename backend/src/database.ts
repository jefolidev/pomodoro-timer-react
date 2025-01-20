import knex from 'knex'
import { env } from '../env'

export const config: knex.Knex.Config = {
  client: 'sqlite',
  connection: {
    filename: env.DATABASE_URL,
  },
  migrations: {
    extension: 'ts',
    directory: './db/migrations',
  },

  useNullAsDefault: true,
}

export const knexDb = knex(config)
