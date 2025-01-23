import { useQuery } from "@tanstack/react-query";
import { createContext, useState } from "react";
import { z } from "zod";
import { getSessions } from "../http/get-session";

const sessionSchema = z.object({
    id: z.string().uuid(),
    name: z.string(),
    status: z.enum(['pending', 'in_progress', 'interrupted', 'completed']),
    short_break_time: z.number(),
    long_break_time: z.number(),
    sessions_until_long_break: z.number(),
    amount_session_minutes: z.number(),
    amount_session_breaks: z.number(),
    created_at: z.string(),
    completed_at: z.string().nullable(),
    pending_since: z.string().nullable(),
})

type Session = z.infer<typeof sessionSchema>

interface SessionContext {
    session: Session[] | undefined
}

interface SessionProvider {
    children: React.ReactNode
}

export const SessionContext = createContext({} as SessionContext)

export function SessionProvider({ children }: SessionProvider) {
    const [session, setSession] = useState<Session[] | undefined>()

  



    return <SessionContext.Provider value={{ session }}>{children}</SessionContext.Provider>
}