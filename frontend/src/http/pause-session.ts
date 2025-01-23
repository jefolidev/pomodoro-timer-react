import { api } from "../lib/axios"

export async function pauseSession(id: string | undefined) {
  try {
    return await api.patch(`/sessions/pause/${id}`)
  } catch (error) {
    console.error("The current session is already paused!")
    throw new Error("A error has ocurred " + error)
  }
}
