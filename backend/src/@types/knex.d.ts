import { Knex } from 'knex'
declare module 'knex/types/tables' {
  export interface Tables {
    sessions: {
      id: string
      name: string
      status: pending | in_progress | completed
      short_break_time: number
      long_break_time: number
      sessions_until_long_break: number
      amount_session_minutes: number
      amount_session_breaks: number
      created_at: string
      completed_at?: string | null
      pending_since?: string | null
    }
  }
}
