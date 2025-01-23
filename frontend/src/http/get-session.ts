import { z } from "zod"
import { api } from "../lib/axios"

const sessionResponseSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  status: z.enum(["pending", "in_progress", "interrupted", "completed"]),
  short_break_time: z.number(),
  long_break_time: z.number(),
  sessions_until_long_break: z.number(),
  amount_session_minutes: z.number(),
  amount_session_breaks: z.number(),
  created_at: z.string(),
  completed_at: z.string().nullable(),
  pending_since: z.string().nullable(),
})

export type Session = z.infer<typeof sessionResponseSchema>

export async function getSessions(): Promise<Session[]> {
  try {
    const response = await api.get("/sessions")
    return response.data.sessions
  } catch (err) {
    console.error("A error ocurred at GET the sessions ", err)
    throw new Error("A error ocurred at GET the sessions " + err)
  }
}
