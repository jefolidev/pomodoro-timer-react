import { api } from "../lib/axios"

export async function resumeSession(id: string | undefined) {
  try {
    return await api.patch(`/sessions/resume/${id}`)
  } catch (error) {
    console.error("The current session is already resumed! " + error)
    throw new Error("A error has ocurred " + error)
  }
}
