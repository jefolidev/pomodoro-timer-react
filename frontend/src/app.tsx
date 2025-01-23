import { useQuery } from "@tanstack/react-query"
import { TimerActive } from "./components/timer-active"
import { TimerConfig } from "./components/timer-config"
import { TimerForm } from "./components/timer-form"
import { useScreen } from "./hooks/useScreen"
import { getSessions } from "./http/get-session"
import "./index.css"

export function App() {
  const { screen } = useScreen()

  type Screens = Record<typeof screen, void | JSX.Element>

  const { data: sessionQuery } = useQuery({
    queryFn: getSessions,
    queryKey: ["sessions"],
  })

  const screensList: Screens = {
    form: <TimerForm />,
    config: <TimerConfig />,
    timer: <TimerActive />,
  }

  const hasActiveSession = sessionQuery?.some(
    (session) => session.status === "in_progress" || "pending",
  )

  function screenWillBeShowed() {
    if (screen === "timer" || hasActiveSession) {
      return screensList.timer
    }
    if (screen === "config") {
      return screensList.config
    }

    return screensList.form
  }

  console.log(sessionQuery)

  return <>{screenWillBeShowed()}</>
}
