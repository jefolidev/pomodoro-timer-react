import { QueryClientProvider, useQuery } from "@tanstack/react-query"
import { TimerForm } from "./components/timer-form"
import { ScreenTransitionProvider } from "./context/screen-transition-context"
import { useScreen } from "./hooks/useScreen"
import { getSessions } from "./http/get-session"
import "./index.css"
import { queryClient } from "./lib/react-query"

export function App() {
  const { screen } = useScreen()

  const { data: sessionQuery } = useQuery(
    {
      queryFn: getSessions,
      queryKey: ['sessions']
    }
  )

  console.log(sessionQuery)

  return (
      <ScreenTransitionProvider>
        <TimerForm />
      </ScreenTransitionProvider>
  )
}
