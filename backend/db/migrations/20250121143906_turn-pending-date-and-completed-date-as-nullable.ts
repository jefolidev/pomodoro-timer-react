import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.alterTable('sessions', (t) => {
    t.timestamp('completed_at').nullable().alter()
    t.timestamp('pending_since').nullable().alter()
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.alterTable('sessions', (t) => {
    t.dropColumn('completed_at')
    t.dropColumn('pending_since')
  })
}
