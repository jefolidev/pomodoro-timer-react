import { z } from "zod"
import { api } from "../lib/axios"

const newSessionSchema = z.object({
  name: z.string(),
  amount_session_minutes: z.number(),
  amount_session_breaks: z.number(),
})

type Session = z.infer<typeof newSessionSchema>

export async function createSession(data: Session) {
  try {
    const response = api.post("sessions", { ...data })

    return response
  } catch (err) {
    console.error("Error at create new session: ", err)
    throw new Error("Error at create new session: " + err)
  }
}
