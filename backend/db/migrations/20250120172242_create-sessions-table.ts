import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('sessions', (t) => {
    t.uuid('id').primary().index()
    t.string('name').notNullable().index()
    t.enu('status', ['pending', 'in_progress', 'completed'])
      .notNullable()
      .index()
    t.decimal('short_break_time', 3, 0).notNullable()
    t.decimal('long_break_time', 3, 0).notNullable()
    t.integer('sessions_until_long_break').notNullable()
    t.integer('amount_session_breaks').notNullable()
    t.decimal('amount_session_minutes', 3, 0).notNullable()
    t.timestamp('created_at').defaultTo(knex.fn.now()).notNullable()
    t.timestamp('completed_at')
    t.timestamp('pending_since')
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists('sessions')
}
