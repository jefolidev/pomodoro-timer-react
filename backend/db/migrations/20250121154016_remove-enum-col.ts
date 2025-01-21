import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.alterTable('sessions', (t) => {
    t.dropColumn('status')
  })

  await knex.schema.alterTable('sessions', (t) => {
    t.enu('status', ['pending', 'in_progress', 'completed', 'interrupted'])
      .notNullable()
      .defaultTo('in_progress')
      .index()
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.alterTable('sessions', (t) => {
    t.dropColumn('status')
  })

  await knex.schema.alterTable('sessions', (t) => {
    t.enu('status', ['pending', 'in_progress', 'completed'])
      .notNullable()
      .index()
  })
}
