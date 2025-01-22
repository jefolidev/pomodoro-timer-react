import { api } from "../lib/axios";

export async function getSessions() {
    try {
        const response = await api.get('/sessions')
        return response.data
    } catch (err) {
        console.error("A error ocurred at GET the sessions ", err)
        throw new Error("A error ocurred at GET the sessions " + err)
    }
}